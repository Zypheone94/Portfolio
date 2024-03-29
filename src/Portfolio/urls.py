from django.contrib import admin
from django.urls import path, include

from .views import Index

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', Index),
    path("blog/", include('posts.urls'))
]
