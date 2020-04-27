import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export default class CommentList extends Component {

    state = {
        commentlist: [],
        newCommentList: {}
    }
  
    
    constructor(props) {
        super(props);
    }

    getCommentList = () => {
        axios.get('/api/v1/comments/').then((response) => {
            const foundCommentList = response.data;
            this.setState({
                commentlist: foundCommentList
            })
        })
    }
 

    toggleCreateForm = () => {
        const newShowCreateForm = !this.state.showCreateForm;
        this.setState({
            showCreateForm: newShowCreateForm,
    });
}
    updateComment = (event) => {
        const updatedNewCommentList = { ...this.state.newCommentList};
        updatedNewCommentList[event.target.name] = event.target.value;
        this.setState({
            newCommentList: updatedNewCommentList,
    });
}
    submitCreateComment = (event) => {
        event.preventDefault();
        axios.post('/api/v1/comments/', this.state.newCommentList).then(() => {
        this.toggleCreateForm();
        this.getCommentList();
    });
}
componentDidMount() {
    this.getCommentList()
}
    render() {
        return (
            <div>

                {
                    this.state.commentlist.map((comment, i) => {
                        
                        return (
                            
                            <div key={ comment.id }>
                                <div>  
                                    {/* {`/comment/${comment.id}`} */}
                                    {comment.body} 
                                </div>
                                <div>
                                    {comment.name}
                                </div>
                               
                                
                            </div>
                           
                        )
                    })
                }
                <h3>Comment Here</h3>
                
                    <div>
                            <input type="text" name="name" placeholder="Your name" onChange={ this.updateComment }/>                        
                    </div>
                    <div>                        
                            <textarea className="textarea" name="body" placeholder="Add a comment" onChange={ this.updateComment }></textarea>
                    </div>
                    
                            <button onClick={this.submitCreateComment}>Submit</button>
                   
               
            </div>
        )
        console.log(this.updateComment)
    }
}