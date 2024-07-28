from django.db import models

from .test_suite import TestSuite
from .user import MyUser
from .milestone import Milestone
from .project import Project



class TestRun(models.Model):
    test_run_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255, unique=True)
    test_suite_id = models.ForeignKey(TestSuite, on_delete=models.CASCADE)
    creator_id = models.ForeignKey(MyUser, on_delete=models.CASCADE)  # Replace creator_model with the appropriate model
    milestone_id = models.ForeignKey(Milestone, on_delete=models.CASCADE, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    test_case_filter = models.TextField(null=True, blank=True)
    project_id = models.ForeignKey(Project, on_delete=models.CASCADE)
    is_complete = models.BooleanField(default=False)


class TestRunFile(models.Model):
    file_id = models.AutoField(primary_key=True)
    file = models.FileField(upload_to='test_run_files/')
    test_run_id = models.ForeignKey(TestRun, on_delete=models.CASCADE)

class TestRunTicket(models.Model):
    ticket_id = models.AutoField(primary_key=True)
    ticket = models.CharField(max_length=255, unique=True)
    test_run_id = models.ForeignKey(TestRun, on_delete=models.CASCADE)

class TestRunTestCase(models.Model):
    test_run_test_case_id = models.AutoField(primary_key=True)
    test_run_id = models.ForeignKey(TestRun, on_delete=models.CASCADE)