from django.urls import path
from .views import CreateAchievementItem, GetAchievementAll, DeleteAchievementItem


urlpatterns = [
    # Achievement:
    # path('achievement-add', CreateAchievementItem.as_view()),
    path('achievement-list', GetAchievementAll.as_view()),
    # <int:pk> requires id of item in db.
    # path('achievement-delete/<int:pk>', DeleteAchievementItem.as_view()),
]