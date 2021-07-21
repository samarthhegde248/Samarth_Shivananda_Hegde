from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('walkins/', views.Walkins.as_view(), name="walkins"),
    path('register/', views.Register, name="register"),
    path('callings/',views.Callings, name='callings'),
    path('counselling/', views.Counselling, name='counselling'),
    path('joining/', views.Joining, name='joining'),
    path('joinings/<id>', views.Joinings, name='joinings'),
    path('willing/<id>', views.Willing, name='willing'),
    path('dead/<id>', views.Dead, name='dead'),
    path('students/', views.Students, name='students'),
    path('update/<id>', views.Rejoin, name='update'),
    path('currentstatus/', views.Currentstatus, name='currentstatus'),
    path('complete/<id>', views.Complete, name='complete'),
    path('stopped/<id>', views.Stopped, name='stopped'),

]
