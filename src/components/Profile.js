
import React, {Component} from 'react';
import {Form,FormGroup, FormControl,Button} from 'react-bootstrap'
 class Profile extends Component{
  constructor(props) {
    super(props)
    this.state = {
      userInfo: this.props.profile,
      editing: false,
      error: false
    }
  }
  componentWillReceiveProps(nextProps) {
    
    this.setState({userInfo: nextProps.profile})

 }
  updateValue(type,event) {
    var userInfoCopy = JSON.parse(JSON.stringify(this.state.userInfo))
    userInfoCopy[type] = event.target.value;
    this.setState({userInfo: userInfoCopy})
  }
  saveProfile() {
    var error = false;
    var propertiesToCheck = ['name','location','bio']
    propertiesToCheck.forEach(function (terms) {
      if(this.state.userInfo[terms] === '') {
        error = true;
      }
    }.bind(this));
     if(!error) {
       this.props.saveProfile(this.state.userInfo)
     }
     this.setState({error});
  } 
  render() {
     return (
     <div className="container">
        <Button variant="primary" onClick={() => {this.setState({editing: !this.state.editing})}}>
          {this.state.editing ? 'Cancel Editing' : 'Edit'}
        </Button>{' '}
       <br/>
      {this.state.editing ?
      <Form.Group>
        <label>Name</label>
        <Form.Control
         size="lg"
         type="text"
         placeholder="userInfo" 
         className={this.state.error&&this.state.userInfo.name==="" ? "red-border" : ''}
         value={this.state.userInfo.name}
         onChange={this.updateValue.bind(this,"name")}/>
        
        <label>Location</label>
        <Form.Control
        size="lg"
        type="text"
        placeholder="userInfo" 
        value={this.state.userInfo.location}
        className={this.state.error&&this.state.userInfo.location==="" ? "red-border" : ''}
        onChange={this.updateValue.bind(this,"location")}/>

        <label>Bio</label>
        <Form.Control
        size="lg"
        type="text"
        placeholder="userInfo" 
        value={this.state.userInfo.bio}
        className={this.state.error&&this.state.userInfo.bio==="" ? "red-border" : ''}
        onChange={this.updateValue.bind(this,"bio")}/>
        
        <Button variant="info" onClick={this.saveProfile.bind(this)}>Save</Button>{' '}

     </Form.Group>
           : 
     <div>
       <p><strong>NAME</strong> {this.state.userInfo.name}</p>
       <p><strong>Location</strong> {this.state.userInfo.location}</p>
       <p><strong>Bio</strong> {this.state.userInfo.bio}</p>
     </div>
     }
       </div>)
   }
 }


export default Profile;
