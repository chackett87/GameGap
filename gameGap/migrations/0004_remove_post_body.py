# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('gameGap', '0003_auto_20150624_1724'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='body',
        ),
    ]
