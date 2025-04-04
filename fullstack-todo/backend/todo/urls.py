from django.urls import path
from . import views

urlpatterns = [
    path('todos/', views.TodoListCreate.as_view(), name='todo-list-create'),
    path('todos/<int:pk>/', views.TodoDetail.as_view(), name='todo-detail'),
]
