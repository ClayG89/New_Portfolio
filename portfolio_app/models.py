from django.db import models
from phone_field import PhoneField

# Create your models here.
class Blog(models.Model):
    title = models.CharField(max_length=255)
    blog = models.CharField(max_length=1500)

    def __str__(self):
        return self.title

class Comment(models.Model):
    blog = models.ForeignKey(
        Blog, on_delete=models.CASCADE, related_name='comments')
    body = models.CharField(max_length=200)
    name = models.CharField(max_length=40, default='name')
    

    def __str__(self):
        return self.body

class Contact(models.Model):
    firstname = models.CharField(max_length=20)
    lastname = models.CharField(max_length=20)
    company = models.CharField(max_length=50)
    phone = PhoneField(blank=True)
    email = models.EmailField()
    topic = models.CharField(max_length=250)
    message = models.CharField(max_length=400)

    def __str__(self):
        return self.topic
