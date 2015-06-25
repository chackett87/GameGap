from django.db import models


class Post(models.Model):
    title = models.CharField(max_length=45, null=True)
    date = models.DateField(auto_now_add=True)

    class Meta:
        verbose_name_plural = 'posts'

    def __unicode__(self):
        return str(self.title)

class Comment(models.Model):
    body = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    post = models.ForeignKey(Post)
