from django.urls import path, include
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register('blogs', views.BlogView)
router.register('comments', views.CommentView)
router.register('contacts', views.ContactView)


urlpatterns = [
    path('', include(router.urls))
]