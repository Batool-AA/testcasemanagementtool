# Generated by Django 5.0.6 on 2024-08-03 20:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tcms', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='section',
            name='name',
            field=models.CharField(max_length=255),
        ),
    ]