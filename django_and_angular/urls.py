from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),

    # Route to Angular
    url(r'^$', 'gameGap.views.angular', name='index'),

]
