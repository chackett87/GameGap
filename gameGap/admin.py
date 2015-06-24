from django.contrib import admin
from gameGap.models import Post
from gameGap.models import Tag


# This lets us view the Post and Tag model in the admin panel
admin.site.register(Post)
admin.site.register(Tag)