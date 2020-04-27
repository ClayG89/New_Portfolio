import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export default class Comment extends Component {
        state = {
            comment: [],
            newComments: {},
            
        }
        componentDidMount() {
            const commentId = this.props.match.params.id;
            this.fetchComment(commentId)
        }
        
        fetchComment = async (commentId) => {
            try {
                const commentResponse = await axios.get(`/api/v1/comments/${commentId}/`)
                this.setState({
                    comment: commentResponse.data,
                    blogs: commentResponse.data.blogs,
                })
            }
            catch (error) {
                console.log(error)
                this.setState({error: error.message})
            }
        }
        postComment = (event) => {
           event.preventDefault();
               axios.post('/api/v1/comments/', this.state.newComments).then(() => {
               this.toggleCreateform();
               this.fetchComment();
               });
           }
        
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <h3>{this.state.comment.name}</h3>
                <p>{this.state.comment.body}</p>
            </div>
        )
    }
}
