from rest_framework import serializers
from gameGap.models import Entry


class EntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Entry