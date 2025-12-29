from django.http import HttpResponse
from rest_framework import generics
from .models import Comment
from .serializers import CommentSerializer


# Intentionally reflects user input without escaping for demo purposes.
def reflected_search(request):
    query = request.GET.get("q", "")
    body = f"<p>Search results for: {query}</p>"
    return HttpResponse(body, content_type="text/html")


class CommentListCreateView(generics.ListCreateAPIView):
    queryset = Comment.objects.all().order_by("-created")
    serializer_class = CommentSerializer
