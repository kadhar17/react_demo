import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './BasicForm.css';
import { Button,FormGroup } from 'reactstrap';
import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';

class BasicForm extends React.Component {

    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            userid: this.props.userid,
            name: this.props.name,
            useremail: '',
            password: '',
            passwordConfirm: '',
            pictures: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(e) {
        e.target.classList.add('active');

        this.setState({
            [e.target.name]: e.target.value
        });

        this.showInputError(e.target.name);
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('component state', JSON.stringify(this.state));

        if (!this.showFormErrors()) {
            console.log('form is invalid: do not submit');
            alert("There are some changes that need to be made.")
        } else {
            console.log('form is valid: submit');
            alert("Successfully Saved")
            
        }
    }

    showFormErrors() {
        const inputs = document.querySelectorAll('input');
        let isFormValid = true;

        inputs.forEach(input => {
            input.classList.add('active');

            const isInputValid = this.showInputError(input.name);

            if (!isInputValid) {
                isFormValid = false;
            }
        });

        return isFormValid;
    }

    showInputError(refName) {
        const validity = this.refs[refName].validity;
        const label = document.getElementById(`${refName}Label`).textContent;
        const error = document.getElementById(`${refName}Error`);
        const isPassword = refName.indexOf('password') !== -1;
        const isPasswordConfirm = refName === 'passwordConfirm';

        if (isPasswordConfirm) {
            if (this.refs.password.value !== this.refs.passwordConfirm.value) {
                this.refs.passwordConfirm.setCustomValidity('Passwords do not match');
            } else {
                this.refs.passwordConfirm.setCustomValidity('');
            }
        }

        if (!validity.valid) {
            if (validity.valueMissing) {
                error.textContent = `${label} is a required field`;
            } else if (validity.typeMismatch) {
                error.textContent = `${label} should be a valid email address`;
            } else if (isPassword && validity.patternMismatch) {
                error.textContent = `${label} should be longer than 4 chars`;
            } else if (isPasswordConfirm && validity.customError) {
                error.textContent = 'Passwords do not match';
            }
            return false;
        }

        error.textContent = '';
        return true;
    }

    render() {
        return (

            <form noValidate>
                <div>
                    <h2>Settings</h2>
                </div>
                <div className="row">
                <div className="col-xs-12 col-lg-4 col-md-4 col-sm-12">
                {/*<div className="form-group">
                 <ImagesUploader
                id="userimageLabel"
                url="E:\"
                optimisticPreviews
                placeholder="image"
                multiple={true}
                onLoadEnd={(err) => {
                    if (err) {
                        console.error(err);
                    }else{
                        console.log("loaded");
                    }
                }}
                
                label="Upload a picture"
                />
                <div className="error" id="userimageError" />
                </div> */}

                </div>
                <div className="col-xs-12 col-lg-auto col-md-auto col-sm-12">
                <div className="form-group">
                    <label id="useridLabel">User ID</label>
                    <input className="form-control"
                        type="text"
                        name="userid"
                        ref="userid"
                        value={this.state.userid}
                        onChange={this.handleChange}
                        size="40" required disabled/>
                    <div className="error" id="useridError" />
                </div>
                <div className="form-group">
                    <label id="nameLabel">Name</label>
                    <input className="form-control"
                        type="text"
                        name="name"
                        ref="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        required />
                    <div className="error" id="nameError" />
                </div>
                </div>
                </div>
                <div className="form-group">
                    <label id="useremailLabel">Email</label>
                    <input className="form-control"
                        type="email"
                        name="useremail"
                        ref="useremail"
                        value={this.state.useremail}
                        onChange={this.handleChange}
                        required />
                    <div className="error" id="useremailError" />
                </div>
                <div className="form-group">
                    <label id="passwordLabel">New Password*:</label>
                    <input className="form-control"
                        type="password"
                        name="password"
                        ref="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        pattern=".{5,}"
                        required />
                    <div className="error" id="passwordError" />
                    <p className="note">Password are case sensitive.</p>
                </div>
                <div className="form-group">
                    <label id="passwordConfirmLabel">Confirm Password:</label>
                    <input className="form-control"
                        type="password"
                        name="passwordConfirm"
                        ref="passwordConfirm"
                        value={this.state.passwordConfirm}
                        onChange={this.handleChange}
                        required />
                    <div className="error" id="passwordConfirmError" />
                </div>
                <button className="btn btn-primary"
                    onClick={this.handleSubmit}>Save</button>
            </form>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <BasicForm userid='10296' name='abdul' />
            </div>
        );
    }
}

export default App;