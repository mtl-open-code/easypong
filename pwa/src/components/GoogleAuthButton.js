import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

const responseGoogle = (response) => {
  console.log(response);
}

class GoogleAuthButton extends Component{
    
    render(){
        return (
          <GoogleLogin
          clientId="268479847684-ferlkjqla3j06p3od8uuo38j5m7er1j9.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          />
        );
    }
}

export default GoogleAuthButton;