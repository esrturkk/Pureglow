"""
URL configuration for bakim project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from . import views





urlpatterns = [
    path('admin/', admin.site.urls),
    path('aboutus/', views.aboutus, name='aboutus'),
    path('home/', views.home, name='home'),
    path('homeng/', views.homeng, name='homeng'),
    path('login/', views.login, name='login'),
    path('products/', views.products, name='products'),
    path('signup/', views.signup, name='signup'),
    path('test/', views.test, name='test'),
    path('tips/', views.tips, name='tips'),
    path('yagli/', views.yagli, name='yagli'),
    path('karma/', views.karma, name='karma'),
    path('kuru/', views.kuru, name='kuru'),
    path('hassas/', views.hassas, name='hassas'),

   
    
    
]


