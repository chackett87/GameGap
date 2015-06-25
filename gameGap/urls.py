from django.conf.urls import url
from .api.views.entry_view import PostView
from .api.views.entry_view import CommentView

urlpatterns = [
    url(r'^entries/$', PostView.as_view(), name="PostViewer"),
    url(r'^comments/$', CommentView.as_view(), name="CommentViewer")    
]