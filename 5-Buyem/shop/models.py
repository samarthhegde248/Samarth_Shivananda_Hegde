from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Customer(models.Model):
	email = models.ForeignKey(User, on_delete=models.CASCADE)
	mobile = models.CharField(max_length = 10)
	dob = models.DateField()
	address = models.TextField()
	delivery_add = models.TextField()
	profile_pic = models.ImageField(upload_to='dp', default='dp/default.png')
	cart_item = models.TextField()
	buy_history = models.BooleanField(default=False)

	def __str__(self):
		return self.mobile

class Product(models.Model):
	name = models.CharField(max_length=100, unique=True)
	product_pic = models.ImageField(upload_to='product', default='product/default.png')
	description = models.TextField()
	cost = models.IntegerField()
	category = models.TextField()
	no_of_item = models.IntegerField()

	def __str__(self):
		return self.name

class BuyedProduct(models.Model):
	customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
	product = models.TextField()
	delivery_add = models.TextField()

	def __str__(self):
		return self.product