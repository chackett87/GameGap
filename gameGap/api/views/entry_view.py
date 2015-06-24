from rest_framework.generics import ListCreateAPIView
from gameGap.api.serializers.entry_serializer import EntrySerializer
from gameGap.models import Entry


class EntryView(ListCreateAPIView):
    serializer_class = EntrySerializer

    def get_queryset(self):
        return Entry.objects.all()