import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export default class BlogList extends Component {
    state = {
        error: '',
        blogs: []
    }
    componentDidMount(){
        this.fetchBlogs();
    }

    fetchBlogs = async () => {
        try {
            const res = await axios.get('/api/v1/blogs/');
            this.setState({blogs: res.data});
        }
        catch (err) {
            console.log(err)
            this.setState({error: err.message})
        }
    }
    render() {
        if (this.state.error){
            return <div>{this.state.error}</div>
        }
        return (
            <div>
                <h1>All Blogs</h1>
                {this.state.blogs.map(blog => (
                    <div key={blog.id}>
                        <Link to={`/blog/${blog.id}`} >{blog.name}</Link>
                    </div>
                ))}
            </div>
        );
    }
}
