from rest_framework import serializers

from .models import Blog, Comment, Contact

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('id','body', 'blog')

class BlogSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True, read_only=True)
    class Meta:
        model = Blog
        fields = ('id', 'title', 'blog', 'comments')


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ('id', 'firstname', 'lastname', 'company', 'phone', 'email', 'topic', 'message')
 