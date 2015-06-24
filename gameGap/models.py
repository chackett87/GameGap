from django.contrib.auth.models import User
from django.db import models


class Tag(models.Model):
    name = models.CharField(max_length=45)

    def __str__(self):
        return self.name


class Post(models.Model):
    body = models.TextField()
    title = models.CharField(max_length=45, null=True)
    tags = models.ManyToManyField(Tag)

    class Meta:
        verbose_name_plural = 'posts'

    def __str__(self):
        if self.title:
            return self.title
        else:
            return '{}...'.format(self.body[:20])

