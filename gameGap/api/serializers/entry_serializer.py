from rest_framework import serializers
from gameGap.models import Post, Comment


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment