from rest_framework import serializers

from .models import Blog, Comment, Contact

class BlogSerializer(serializers.HyperlinkedModelSerializer):
    comments = serializers.HyperlinkedRelatedField(
        view_name='comment_detail',
        many=True,
        read_only=True,
    )
    class Meta:
        model = Blog
        fields = ('id', 'title', 'blog')

class CommentSerializer(serializers.HyperlinkedModelSerializer):
    blog = serializers.HyperlinkedRelatedField(
        view_name='blog_detail',
        many=False,
        read_only=False,
        queryset=Blog.objects.all(),
    )
    class Meta:
        model = Comment
        fields = ('id','body', 'blog')

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ('id', 'firstname', 'lastname', 'company', 'phone', 'email', 'topic', 'message')
 