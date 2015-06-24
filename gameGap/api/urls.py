from django.conf.urls import url
from gameGap.api.views.entry_view import EntryView

urlpatterns = [
    url(r'^entries/$', EntryView.as_view()),
]