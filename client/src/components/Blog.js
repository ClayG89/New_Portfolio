import React, { Component } from 'react'
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export default class Blog extends Component {
    state = {
        blog: {},
        comments: [],
}

componentDidMount() {
    const blogId = this.props.match.params.id;
    this.fetchBlog(blogId)
}

fetchBlog = async (blogId) => {
    try {
        const blogResponse = await axios.get(`/api/v1/blogs/${blogId}`)
        this.setState({
            blog: blogResponse.data,
            comments: blogResponse.data.comments,
        })
    }
    catch (error) {
        console.log(error)
        this.setState({error: error.message})
    }
}
render() {
    return (
        <div>
            <h1>{this.state.blog.title}</h1>
            {this.state.comments.map(comment => (
                <div key={comment.id}>
                    <h4>{Blog.title}</h4>
                </div>
            ))}
        </div>
    );
}
}
