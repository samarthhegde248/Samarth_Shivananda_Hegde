from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.views.generic import ListView, DetailView
from django.views.generic.edit import CreateView
from .models import Customer, Product, BuyedProduct
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.core.mail import send_mail
from django.conf import settings
# Create your views here.

def HomePage(request):
	object_list = Product.objects.all()
	return render(request, 'home.html', {'object_list':object_list})

def sendmail(fname, lname, username, recpemail):
    subject = 'Successful Registraion'
    message = 'Hi {} {},\nYour account with username: "{}" has been registered with us successfully.\n\nThanks & Regards\nQartery'.format(fname,lname,username)
    email_from = settings.EMAIL_HOST_USER
    recipient_list = [recpemail]
    # send_mail( subject, message, email_from, recipient_list )

def Signup(request):
	if request.method == 'POST':
		try:
			fname = request.POST['fname'].lower()
			lname = request.POST['lname'].lower()
			username = request.POST['username'].lower()
			password = request.POST['password']
			email = request.POST['email']
			mobile = request.POST['mobile']
			address = request.POST['address']
			profile_pic = request.FILES['profile_pic']
			dob = request.POST['dob']
		except:
			messages.warning(request, "Registration was unsuccessful! Please try again and fill in all the details.")
			return redirect('signup')
		user = User.objects.create(first_name=fname, last_name=lname, email=email, username=username, is_active=1)
		user.set_password(password)
		user.save()
		customer = Customer.objects.create(email=user, mobile=mobile, address=address, delivery_add=address, dob=dob, profile_pic=profile_pic, cart_item='none')
		# sendmail(fname, lname, username, email)
		customer.save()
		user_login=authenticate(username=username,password=password)
		if user_login:
			login(request,user_login)
			messages.success(request,user.username+" Registered Successfully.")
			return redirect('home')
		else:
			messages.warning(request,"Registration was unsuccessful! Please try again.")
			return redirect('signup')
	return render(request, 'signup.html')

def Login(request):
	if request.method == 'POST':
		username = request.POST['username'].lower()
		password = request.POST['password']
		user = authenticate(username=username, password=password)
		if user:
			login(request,user)
			messages.success(request, user.username+' logged in successfully.')
			return redirect('home')
		else:
			messages.warning(request, "Login Failed! Please check the credentials and if you don't have an account then create one with us.")
			return redirect('home')
	return render(request, 'login.html')

def Logout(request):
	logout(request)
	return redirect('home')

def Cart(request):
    user = User.objects.get(id=request.user.id)
    customer = Customer.objects.get(email=user)
    product = Product.objects.all()
    c_item = customer.cart_item.split(',')
    c_product = []
    no_pro = 0
    est_price = 0
    if len(c_item):
        for i in range(0, len(c_item)):
            for j in range(0,len(product)):
                if c_item[i] == product[j].name:
                    c_product.append(product[j])
                    no_pro += 1
                    est_price += int(product[j].cost)
        return render(request, 'cart.html', {'c_product':c_product, 'no_pro':no_pro, 'est_price':est_price})
    return render(request, 'cart.html')

def Payment(request, id):
	user = User.objects.get(id=request.user.id)
	customer = Customer.objects.get(email=user)
	del_add = customer.address
	product = []
	pro = Product.objects.get(id=id)
	product.append(pro)
	if request.method == 'POST':
		del_add = request.POST['address']
		customer.delivery_add = del_add
		customer.cart_item += ","+ pro.name
		customer.save()
		pro.no_of_item -= 1
		pro.save()
		return redirect('successpayment')
	return render(request, 'payment.html', {'product':product, 'del_add':del_add})

def Cpayment(request):
	user = User.objects.get(id=request.user.id)
	product = Product.objects.all()
	customer = Customer.objects.get(email=user)
	del_add = customer.address
	lst_pro = []
	no_pro = 0
	est_price = 0
	c_item = customer.cart_item.split(',')
	if len(c_item):
		for i in range(0, len(c_item)):
			for j in range(0,len(product)):
				if c_item[i] == product[j].name:
					lst_pro.append(product[j])
					no_pro += 1
					est_price += int(product[j].cost)
	if request.method == 'POST':
		del_add = request.POST['address']
		customer.delivery_add = del_add
		customer.save()
		return redirect('successpayment')
	return render(request, 'cpayment.html', {'lst_pro':lst_pro, 'no_pro':no_pro, 'est_price':est_price, 'del_add':del_add})

def Addtocart(request, id):
    product = Product.objects.get(id=id)
    user = User.objects.get(id=request.user.id)
    customer = Customer.objects.get(email=user)
    customer.cart_item += ",{}".format(product.name)
    product.no_of_item -= 1
    product.save()
    customer.save()
    return redirect('cart')

def Remcartitem(request, id):
    product = Product.objects.get(id=id)
    user = User.objects.get(id=request.user.id)
    customer = Customer.objects.get(email=user)
    pastcartitem = customer.cart_item.split(',')
    pastcartitem.remove(product.name)
    curitem = ",".join(pastcartitem)
    customer.cart_item = curitem
    product.no_of_item += 1
    customer.save()
    product.save()
    return redirect('cart')

def Successpayment(request):
	user = User.objects.get(id=request.user.id)
	customer = Customer.objects.get(email=user)
	del_add = customer.delivery_add
	buyed = BuyedProduct.objects.create(customer=customer, product=customer.cart_item[5:], delivery_add=customer.delivery_add)
	buyed.save()
	customer.cart_item = 'none'
	customer.buy_history = 1
	customer.save()
	return HttpResponse("<h1>"+ user.first_name +" your order has been placed for the address :- "+ del_add +"</h1>")

def Srchfun(request):
	product = Product.objects.all()
	if request.method == 'POST':
		keywrd = request.POST['keywrd'].lower().strip(' ')
	keyprod = []
	for i in range(0, len(product)):
		catg = product[i].category.split(',')
		for j in range(0, len(catg)):
			catg[j] = catg[j].strip(' ')
		if keywrd in catg or keywrd == product[i].name:
			keyprod.append(product[i])
	return render(request, 'home.html', {'object_list':keyprod})

def Editprof(request):
	user = request.user
	pers = Customer.objects.get(email=user)
	if request.method == 'POST':
		try:
			fname = request.POST['fname'].lower()
			lname = request.POST['lname'].lower()
			password = request.POST['password']
			email = request.POST['email']
			mobile = request.POST['mobile']
			address = request.POST['address']
			profile_pic = request.FILES['profile_pic']
			dob = request.POST['dob']
		except:
			messages.warning(request, "Updation was unsuccessful! Please try again and fill in the details correctly.")
			return redirect('home')
		user.first_name=fname
		user.last_name=lname
		user.email=email
		user.set_password(password)
		user.save()
		pers.mobile=mobile
		pers.address=address
		pers.dob=dob
		pers.profile_pic=profile_pic
		pers.save()
		messages.success(request,user.username+" updated Successfully.")
		return redirect('home')
	return render(request, 'signup.html', {'person':request.user, 'pers':pers})

def Deact(request):
	request.user.is_active = 0
	request.user.save()
	return redirect('home')

def OrderDetail(request):
	user = User.objects.get(id=request.user.id)
	customer = Customer.objects.get(email=user)
	orders = BuyedProduct.objects.filter(customer=customer)
	buyhistory = customer.buy_history
	return render(request, 'orders.html', {'orders':orders, 'buyhistory':buyhistory})

def CancelOrder(request, id):
	BuyedProduct.objects.get(id=id).delete()
	return redirect('orders')


