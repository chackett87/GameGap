from django.db import models


class Post(models.Model):
    title = models.CharField(max_length=45, null=True)
    date = models.DateField(auto_now_add=True)

    class Meta:
        verbose_name_plural = 'posts'

    def __str__(self):
        if self.title:
            return self.title
        else:
            return '{}...'.format(self.body[:20])

class Comment(models.Model):
    body = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    post = models.ForeignKey(Post)
