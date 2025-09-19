from django.db import models

# Create your models here.

class Question(models.Model):

    class Change(models.TextChoices):
        ONE = "ONE", 'One answer'
        MANY = "MANY", 'Several answer'
    
    title = models.CharField(max_length=100)
    change = models.CharField(max_length=4, choices=Change, default=Change.ONE)

    def __str__(self):
        return self.title


class Polls(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.title
