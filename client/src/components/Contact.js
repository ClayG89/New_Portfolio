import React, { Component } from 'react'
import axios from 'axios'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export default class Contact extends Component {
    state = {
        contact: [],
    }
    render() {
        return (
            <div>
                <h1>HELLO WORLD</h1>
            </div>
        )
    }
}
