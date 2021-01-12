 
import React, {Component} from 'react';
import {Nav,Navbar} from 'react-bootstrap'
import SliderComponent from '../container/Slider';
import Profile from '../container/Profile';
 class App extends Component{
   constructor(props) {
     super(props)
     this.state = {
       currentTab: "slider" 
     }
   }
  
   componentDidMount() {this.props.fetchProfile();
  }
   render() {
     return (<div>
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#" onClick={() => {this.setState({currentTab: "slider"})}}>Github Profile</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
    <Nav>
      <Nav.Link href="#Slider" onClick={() => {this.setState({currentTab: "slider"})}}>Slider</Nav.Link>
      <Nav.Link eventKey={2} href="#profile" onClick={() => {this.setState({currentTab: "profile"})}}>
        Profile
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar> 
    <div>
      {this.state.currentTab === 'slider' ? <SliderComponent/> : false}
      {this.state.currentTab === 'profile' ? <Profile/> : false}
    </div>
     </div>)
   }
 }


export default App;
