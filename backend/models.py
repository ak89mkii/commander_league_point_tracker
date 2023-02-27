from django.db import models

# Create your models here.

class Achievement(models.Model):
    date = models.DateField(auto_now_add=True)
    description = models.CharField(max_length=1000)
    # user = models.ForeignKey(User, on_delete=models.CASCADE)

    # def __str__(self):
    #     return self.skill