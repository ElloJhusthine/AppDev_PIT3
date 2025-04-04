from rest_framework import generics
from .models import Todo
from .serializers import TodoSerializer

# List and Create Todo items
class TodoListCreate(generics.ListCreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

# Retrieve, Update, or Delete a Todo item
class TodoDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
