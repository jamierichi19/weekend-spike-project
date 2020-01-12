import React, {Component} from 'react';
import {connect} from 'react-redux';


export class InfoPage extends Component {

  state = {
    to: '',
    subject: '',
    body: ''
  }

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
    console.log(event.target.value)
  }

  handleSubmit = () => {
    this.props.dispatch({ type: 'SEND_EMAIL', payload: this.state });
    this.setState({
      to: '',
      subject: '',
      body: ''
    })
  }

  render() {
    return (
      <div>
        <h2>Email</h2>
        <input 
          type="text" 
          placeholder="to"
          onChange={this.handleInputChangeFor('to')}
          value={this.state.to}
        />
        <br />
        <input 
          type="text" 
          placeholder="subject"
          onChange={this.handleInputChangeFor('subject')}
          value={this.state.subject}
        />
        <br />
        <textarea 
          placeholder="body"
          cols="25"
          rows="5"
          onChange={this.handleInputChangeFor('body')}
          value={this.state.body}
        />
        <br />
        <button onClick={this.handleSubmit}>Send</button>
      </div>
    )
  }
}

export default connect()(InfoPage);
