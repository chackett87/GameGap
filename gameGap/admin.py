from django.contrib import admin
from gameGap.models import Post
from gameGap.models import Comment


# This lets us view the Post in the admin panel
admin.site.register(Post)
admin.site.register(Comment)
