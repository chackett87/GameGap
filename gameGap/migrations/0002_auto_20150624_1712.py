# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('gameGap', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('body', models.TextField()),
                ('date', models.DateField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('body', models.TextField()),
                ('title', models.CharField(max_length=45, null=True)),
                ('date', models.DateField(auto_now_add=True)),
            ],
            options={
                'verbose_name_plural': 'posts',
            },
        ),
        migrations.RemoveField(
            model_name='entry',
            name='author',
        ),
        migrations.RemoveField(
            model_name='entry',
            name='tags',
        ),
        migrations.DeleteModel(
            name='Entry',
        ),
        migrations.DeleteModel(
            name='Tag',
        ),
        migrations.AddField(
            model_name='comment',
            name='post',
            field=models.ForeignKey(to='gameGap.Post'),
        ),
    ]
