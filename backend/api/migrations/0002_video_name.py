# Generated by Django 4.2.7 on 2023-11-30 11:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='video',
            name='name',
            field=models.CharField(default=1, max_length=50),
        ),
    ]
