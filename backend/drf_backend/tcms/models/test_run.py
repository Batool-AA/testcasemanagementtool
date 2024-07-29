from django.db import models

from .test_suite import TestSuite

class TestRun(models.Model):
    test_run_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255, unique=True)
    test_suite_id = models.ForeignKey(TestSuite, on_delete=models.CASCADE)
    creator_id = models.IntegerField()
    milestone_id = models.ForeignKey('Milestone', on_delete=models.CASCADE, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    test_case_filter = models.TextField(null=True, blank=True)
    project_id = models.ForeignKey('Project', on_delete=models.CASCADE)

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
    test_run_id = models.ForeignKey('TestRun', on_delete=models.CASCADE)
    test_case_id = models.ForeignKey('TestCase', on_delete=models.CASCADE)

class TestRunTestCaseResults(models.Model):
    test_run_test_case_result_id = models.AutoField(primary_key=True)
    test_run_test_case_id = models.ForeignKey(TestRunTestCase, on_delete=models.CASCADE)
    test_case_result_id = models.ForeignKey('TestCaseResult', on_delete=models.CASCADE)
    test_run_id = models.ForeignKey(TestRun, on_delete=models.CASCADE)