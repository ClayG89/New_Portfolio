import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


export default class ContactList extends Component {
    state = {
        contactlist: [],
        newContactList: {}

    }
    getContactList= () => {
        axios.get('/api/v1/contacts/').then((response) => {
            const foundContactList = response.data;
            this.setState({
        contactlist: foundContactList
            })
        })
    }
    toggleCreateForm = () => {
        const newShowCreateForm = !this.state.showCreateForm;
        this.setState({
            showCreateForm: newShowCreateForm,
        });
    }
    updateContactList = (event) => {
        const updatedNewContactList = { ...this.state.newContactList};
        updatedNewContactList[event.target.name] = event.target.value;
        this.setState({
            newContactList: updatedNewContactList,
        });
    }
    submitCreateContactList = (event) => {
        event.preventDefault();
        axios.post('/api/v1/contacts/', this.state.newContactList).then(() => {
            this.toggleCreateForm();
            this.getContactList();
        });
    }
    componentDidMount() {
        this.getContactList()
    }
    render() {
        return (
            <div>
                
              <h2>Contact Me</h2>

                <div>
                   
                   {
                       this.state.contactlist.map((contact, i) => {
                           return (
   
                               <div>
                                   <Link to={`/contact/${contact.id}`}>{contact.company}</Link>
                               </div>
                         
                           )
                       })
                   }
                   </div>
                   <h1>Hello World</h1>

                <div>
                    <h4>First Name</h4>
                    <input type="text" name="firstname" onChange={ this.updateContactList }/>
                </div>
                <div>
                <h4>Last Name</h4>
                    <input type="text" name="lastname" onChange={ this.updateContactList }/>
                </div>
                <div>
                    <h4>Company</h4>
                    <input type="number" name="company" onChange={ this.updateContactList }/>
                </div>
                <div>
                    <h4>Phone</h4>
                    <input type="number" name="phonenum" onChange={ this.updateContactList }/>                    
                </div>
                <div>
                    <h4>email</h4>
                    <input type="tel" name="email" onChange={ this.updateContactList }/>                  
                </div>
                <div>
                    <h4>Message Subject</h4>
                    <input type="number" name="subject" onChange={ this.updateContactList }/>                  
                </div>
                <div>
                    <h4>Message</h4>
                    <input type="number" name="message" onChange={ this.updateContactList }/>                  
                </div>
                

                <button onClick={ this.submitCreateContact }>Submit</button>

            </div>
        )
    }
}