import React, {Component} from 'react';
import {Nav,Navbar} from 'react-bootstrap';
import Slider from 'react-slick'; 
 class SliderComponent2 extends Component{
   
   render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      sliderToShow: 1,
      slideToScroll: 1
    }
    return (
      <div>
       <Slider {...settings}>
       <div className="text-center">{this.props.profile.name}</div>
       <div className="text-center">{this.props.profile.location}</div>
       <div className="text-center">{this.props.profile.bio}</div>
       <div className="text-center"><img src={this.props.profile.avatar_url} alt="failed to load"/></div>
       </Slider>
     </div>)
   }
 }


export default SliderComponent2;
