from django.conf.urls import include, url
from django.contrib import admin
from gameGap import urls as postAndComment_urls

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),

    # Route to Angular
    url(r'^$', 'gameGap.views.angular', name='index'),

    #Route to Posts
    url(r'^posts/', include(postAndComment_urls)),

    #Route to Comments

    url(r'^comment/', include(postAndComment_urls)),

]
