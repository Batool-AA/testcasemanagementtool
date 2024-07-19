from django.shortcuts import render

from rest_framework import viewsets
from ..models.test_plan import *
from ..serializers.test_plan import *


class TestPlanViewSet(viewsets.ModelViewSet):
    queryset = TestPlan.objects.all()
    serializer_class = TestPlanSerializer

class TestPlanFilesViewSet(viewsets.ModelViewSet):
    queryset = TestPlanFiles.objects.all()
    serializer_class = TestPlanFilesSerializer

class TestPlanTicketViewSet(viewsets.ModelViewSet):
    queryset = TestPlanTicket.objects.all()
    serializer_class = TestPlanTicketSerializer


class TestPlanTestCaseViewSet(viewsets.ModelViewSet):
    queryset = TestPlanTestCase.objects.all()
    serializer_class = TestPlanTestCaseSerializer

class TestPlanTestSuiteViewSet(viewsets.ModelViewSet):
    queryset = TestPlanTestSuite.objects.all()
    serializer_class = TestPlanTestSuiteSerializer

