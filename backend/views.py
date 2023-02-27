from django.shortcuts import render
from rest_framework import generics
from .serializers import AchievementSerializer
from .models import Achievement


# Achievement Class:
# POST requests only.
class CreateAchievementItem(generics.CreateAPIView):
    queryset = Achievement.objects.all()
    serializer_class = AchievementSerializer

# GET requests only.
class GetAchievementAll(generics.ListAPIView):
    queryset = Achievement.objects.all()
    serializer_class = AchievementSerializer

# DELETE requests only.
class DeleteAchievementItem(generics.DestroyAPIView):
    queryset = Achievement.objects.all()
    serializer_class = AchievementSerializer