# Generated by Django 4.2.5 on 2023-11-07 17:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('designing', '0002_remove_items_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='items',
            name='image',
            field=models.ImageField(default=1, upload_to='image/'),
            preserve_default=False,
        ),
    ]