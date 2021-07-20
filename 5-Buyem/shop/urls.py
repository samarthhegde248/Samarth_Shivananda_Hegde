from django.urls import path, include
from . import views
from buyem import settings
from django.contrib.staticfiles.urls import static, staticfiles_urlpatterns


urlpatterns = [
	path('', views.HomePage, name='home'),
	path('searchresult/', views.Srchfun, name='searchresult'),
	path('signup/', views.Signup, name='signup'),
	path('deactivate/', views.Deact, name='deact'),
	path('editprofile/', views.Editprof, name='editprofile'),
	path('login/', views.Login, name='login'),
	path('cart/', views.Cart, name='cart'),
	path('successpayment/', views.Successpayment, name='successpayment'),
	path('payment/<id>', views.Payment, name='payment'),
	path('cpayment/', views.Cpayment, name='cpayment'),
	path('logout/', views.Logout, name='logout'),
	path('addtocart/<id>', views.Addtocart, name='addtocart'),
	path('removeitem/<id>', views.Remcartitem, name='removeitem'),
	path('orderdetails/', views.OrderDetail, name='orders'),
	path('cancelorder/<id>', views.CancelOrder, name='cancelorder')

	# path('testcookie/', views.cookie_session),
 #    path('deletecookie/', views.cookie_delete),

]

urlpatterns += staticfiles_urlpatterns()
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)