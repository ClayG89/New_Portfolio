import React, { Component } from 'react'
import axios from 'axios'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export default class Contact extends Component {
    state = {
        contact: [],
    }
    componentDidMount() {
        const contactId = this.props.match.params.id;
        this.fetchContact(contactId)
    }

    fetchContact = async (contactId) => {
        try {
            const contactResponse = await axios.get(`/api/v1/contacts/${contactId}/`)
            this.setState({
                contact: contactResponse.data
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
                <header>
                    
                </header>
    
                <h2>Contact Detail</h2>
                <h3>First Name:  {this.state.contact.firstname}</h3>
                <h3>Last Name:  {this.state.contact.lastname}</h3>
                <h3>Company:  {this.state.contact.company}</h3>
                <h3>Phone:  {this.state.contact.phone}</h3>
                <h3>email: {this.state.contact.email}</h3>
                <h3>Message Subject: {this.state.contact.topic}</h3>
                <h3>Message:  {this.state.contact.message}</h3>
    
              
            </div>
        );
        }
    }
