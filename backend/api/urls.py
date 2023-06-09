from django.urls import include, path
from rest_framework.urlpatterns import format_suffix_patterns
from api import views

urlpatterns = [

    path('admin/', include('rest_framework.urls')),
    path('posts/', views.PostList.as_view()),
    path('posts/<int:pk>/', views.PostDetail.as_view()),
    path('users/', views.UserList.as_view()),
    path('users/<int:pk>/', views.UserDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
