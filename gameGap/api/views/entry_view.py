from rest_framework.generics import ListCreateAPIView
from gameGap.api.serializers.entry_serializer import PostSerializer, CommentSerializer
from gameGap.models import Post, Comment


class PostView(ListCreateAPIView):
    serializer_class = PostSerializer

    def get_queryset(self):
        return Post.objects.all()

class CommentView(ListCreateAPIView):
    serializer_class = CommentSerializer

    def get_queryset(self):
        return Comment.objects.all()