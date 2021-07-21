from django.db import models

# Create your models here.
class User(models.Model):
	name= models.CharField(max_length=25)
	mobile= models.CharField(max_length=10)
	email= models.EmailField()
	course= models.CharField(max_length=50)
	source= models.CharField(max_length=20)
	leadstatus= models.CharField(max_length=15)	#calling, demo, none
	demodate= models.DateField()
	counsler= models.CharField(max_length=20)
	remarks= models.CharField(max_length=100)
	status = models.CharField(default='willing',max_length=7)	#joined, willing, dead

	def __str__(self):
		return self.email

class Customer(models.Model):
	email=models.ForeignKey(User, on_delete=models.CASCADE)
	completiondate= models.DateField()
	datejoining= models.DateField()
	coursefee= models.IntegerField()
	instructor= models.CharField(max_length=20)
	aadhar= models.CharField(max_length=12)
	customerstatus = models.CharField(max_length=9, default='ongoing') #ongoing, completed, stopped
	def __str__(self):
		return self.instructor