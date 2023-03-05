from django.contrib.auth.decorators import login_required
from django.urls import path
from .views import BlogHome, BlogPostDetail, BlogPostCreate, BlogPostUpdate, BlogPostDelete


app_name = "posts"

urlpatterns = [
    path("", BlogHome.as_view(), name='home'),
    path("<str:slug>", BlogPostDetail.as_view(), name="post"),
    path('create/', login_required(BlogPostCreate.as_view()), name="create"),
    path('edit/<str:slug>', BlogPostUpdate.as_view(), name="update"),
    path('delete/<str:slug>', BlogPostDelete.as_view(), name="delete")

]