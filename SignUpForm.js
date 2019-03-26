import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            name: '',
            hasAgreed: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name"><strong>Full Name</strong></label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange} />
              </div>
              
			  <div className="FormField">
                <label className="FormField__Label" htmlFor="name"><strong>Age</strong></label>
                <input type="text" id="age" className="FormField__Input" placeholder="Enter your age" name="age" value={this.state.age} onChange={this.handleChange} />
              </div>
              
			  <div className="FormField">
                <label className="FormField__Label" htmlFor="name"><strong>Blood Group</strong></label>
                <input type="text" id="bloodgroup" className="FormField__Input" placeholder="Enter your BloodGroup" name="bloodgroup" value={this.state.bloodgroup} onChange={this.handleChange} />
              </div>
              
			  <div className="FormField">
                <label className="FormField__Label" htmlFor="name"><strong>Address</strong></label>
                <input type="text" id="address" className="FormField__Input" placeholder="Enter your full address" name="address" value={this.state.address} onChange={this.handleChange} />
              </div>
              
			  <div className="FormField">
                <label className="FormField__Label" htmlFor="name"><strong>City</strong></label>
                <input type="text" id="city" className="FormField__Input" placeholder="Enter your City" name="city" value={this.state.city} onChange={this.handleChange} />
              </div>
              
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email"><strong>E-Mail Address</strong></label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>
			  
			<div className="FormField">
                <label className="FormField__Label" htmlFor="password"><strong>Password</strong></label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
            </div>
			 
			 
			 
              <div className="FormField">
                <label className="FormField__CheckboxLabel">
    <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} 
    onChange={this.handleChange} /> I agree all statements in <a href=" " className="FormField__TermsLink">terms of service</a>
                </label>
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20"><strong>Sign Up</strong></button> <Link to="/sign-in" className="FormField__Link"><strong>I'm already member</strong></Link>
              </div>
            </form>
          </div>
        );
    }
}

export default SignUpForm;
