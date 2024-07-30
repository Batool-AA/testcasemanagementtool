# Generated by Django 5.0.6 on 2024-07-30 05:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tcms', '0002_testrun_is_complete'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='testcaseresult',
            name='status_id',
        ),
        migrations.AddField(
            model_name='testcaseresult',
            name='status',
            field=models.CharField(choices=[('PASS', 'PASS'), ('FAIL', 'FAIL'), ('BLOCKED', 'BLOCKED'), ('ERROR', 'ERROR'), ('UNTESTED', 'UNTESTED'), ('PARTIAL', 'PARTIAL')], default='UNTESTED', max_length=255),
        ),
        migrations.DeleteModel(
            name='StatusForTestCase',
        ),
    ]
