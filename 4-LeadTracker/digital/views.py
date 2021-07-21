from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from django.http import HttpResponse
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from .models import User, Customer
from django.views.generic import ListView, DetailView

# Create your views here.
def home(request):
	return render(request, 'base.html')

class Walkins(ListView):
	model = User
	fields = '__all__'
	template_name = 'walkins.html'
	# context_object_name = 'object_list'

def Register(request):
	if request.method == 'POST':
		name = request.POST['name']
		mobile = request.POST['mobile']
		email = request.POST['email']
		course = request.POST['course']
		source = request.POST['source']
		leadstatus = request.POST['leadstatus']
		demodate = request.POST['demodate']
		counsler = request.POST['counsler']
		remarks = request.POST['remarks']
		User.objects.create(name=name, mobile=mobile, email=email, course=course, source=source, leadstatus=leadstatus, demodate=demodate,counsler=counsler,remarks=remarks)
		return redirect('walkins')
	return render(request, 'register.html')

def Callings(request):
	if request.method == 'POST':
			leadstatus = request.POST['leadstatus']
			demodate = request.POST['demodate']
			queryset = User.objects.filter(leadstatus=leadstatus).filter(demodate = demodate).filter(status="willing")
			return render(request,'callings.html', {'queryset':queryset})
	return render(request, 'callings.html')

def Counselling(request):
	if request.method == 'POST':
			course = request.POST['course']
			demodate = request.POST['demodate']
			queryset = User.objects.filter(course = course).filter(demodate = demodate)
			return render(request,'Counselling.html', {'queryset':queryset})
	return render(request, 'Counselling.html')

def Joinings(request, id):
	joiner = User.objects.get(id=id)
	if request.method == 'POST':
		name= request.POST['name']
		course= request.POST['course']
		completiondate= request.POST['completiondate']
		datejoining= request.POST['datejoining']
		coursefee= request.POST['coursefee']
		instructor= request.POST['instructor']
		aadhar= request.POST['aadhar']
		mobile= request.POST['mobile']
		email= request.POST['email']
		remark= request.POST['remark']
		joiner.name = name
		joiner.course = course
		joiner.mobile = mobile
		joiner.email = email
		joiner.remarks = remark
		joiner.status = "joined"
		joiner.save()
		Customer.objects.create(email=joiner,completiondate=completiondate,datejoining=datejoining,coursefee=coursefee,instructor=instructor,aadhar=aadhar)
		return redirect('students')

	return render(request, 'joinings.html',{'joiner':joiner})

def Joining(request):
	if request.method == 'POST':
		name= request.POST['name']
		course= request.POST['course']
		completiondate= request.POST['completiondate']
		datejoining= request.POST['datejoining']
		coursefee= request.POST['coursefee']
		instructor= request.POST['instructor']
		aadhar= request.POST['aadhar']
		mobile= request.POST['mobile']
		email= request.POST['email']
		remark= request.POST['remark']
		source = request.POST['source']
		User.objects.create(name=name,mobile=mobile,email=email,course=course, source=source,leadstatus='none', demodate=datejoining, counsler=instructor,remarks=remark,status="joined")
		Customer.objects.create(email=joiner,completiondate=completiondate,datejoining=datejoining,coursefee=coursefee,instructor=instructor,aadhar=aadhar)
		return redirect('students')
	return render(request, 'joining.html')

def Willing(request, id):
	willer = User.objects.get(id=id)
	if request.method == 'POST':
		willdate = request.POST['willdate']
		willer.demodate = willdate
		willer.save()
		return redirect('walkins')

	return render(request, 'willing.html', {'willer':willer})

def Dead(request, id):
	person = User.objects.get(id=id)
	person.delete()
	return redirect('walkins')

def Students(request):
	cstudents = Customer.objects.filter(customerstatus='completed')
	ostudents = Customer.objects.filter(customerstatus='ongoing')
	sstudents = Customer.objects.filter(customerstatus='stopped')
	# sstudents = Customer.objects.filter(customerstatus='stopped').prefetch_related('email')
	# print("{}".format(cstudents[0].email.name))
	return render(request, 'students.html', {'cstudents':cstudents, 'ostudents':ostudents, 'sstudents':sstudents})

def Rejoin(request, id):
	rjstudent = Customer.objects.get(id=id)
	print("{}".format(rjstudent))
	if request.method == 'POST':
		completiondate = request.POST['completiondate']
		rjstudent.completiondate = completiondate
		rjstudent.customerstatus = 'ongoing'
		rjstudent.save()
		return redirect('students')
	return render(request, 'update.html', {'rjstudent':rjstudent})

def Currentstatus(request):
	student = Customer.objects.filter(customerstatus='ongoing')
	return render(request, 'currentstatus.html', {'student':student})

def Complete(request, id):
	student = Customer.objects.get(id=id)
	student.customerstatus = "completed"
	student.save()
	return redirect('students')

def Stopped(request, id):
	student = Customer.objects.get(id=id)
	student.customerstatus = "stopped"
	student.save()
	return redirect('students')