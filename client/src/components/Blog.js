import React, { Component } from 'react'
import axios from 'axios';
import Comment from './Comment'
import CommentList from './CommentList';


axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export default class Blog extends Component {
    state = {
        blog: [],
        comments: [],
}

componentDidMount() {
    const blogId = this.props.match.params.id;
    this.fetchBlog(blogId)
   
}

fetchBlog = async (blogId) => {
    try {
        const blogResponse = await axios.get(`/api/v1/blogs/${blogId}/`)
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
            <div>          
                <h2>{this.state.blog.title}</h2>
                <p>{this.state.blog.blog}</p>
            </div> 
            <div>
                <h2>Comments</h2>
                <CommentList />
                {/* <Comment /> */}
            </div> 
        </div>
    );
}
}
