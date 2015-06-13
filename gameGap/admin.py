from django.contrib import admin
from gameGap.models import Entry
from gameGap.models import Tag


# This lets us view the Entry and Tag model in the admin panel
admin.site.register(Entry)
admin.site.register(Tag)