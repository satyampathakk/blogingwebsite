# Generated by Django 4.2.5 on 2023-11-09 13:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('designing', '0005_blog_delete_items'),
    ]

    operations = [
        migrations.RenameField(
            model_name='blog',
            old_name='User',
            new_name='user',
        ),
    ]
