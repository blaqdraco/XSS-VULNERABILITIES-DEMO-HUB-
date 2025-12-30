from django.urls import path
from . import views

urlpatterns = [
    path("search/", views.reflected_search, name="reflected-search"),
    path("comments/", views.CommentListCreateView.as_view(), name="comments"),
    path("comments/<int:pk>/", views.CommentDetailView.as_view(), name="comment-detail"),
]
