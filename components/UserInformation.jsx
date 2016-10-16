import React from 'react';
import MaterialButton from './MaterialButton.jsx';

class UserInformation extends React.Component {
   constructor() {
       super();
       this.openTab = this.openTab.bind(this);
       this.handleFocus = this.handleFocus.bind(this);
   }
   componentDidMount () {
       this.openTab('loginContent');
   }
   handleFocus(event) {
       $(event.currentTarget).addClass('used');
   }
   openTab(tabId) {
        if( tabId == 'loginContent') {
            $(this.refs.loginContent).show();
            $(this.refs.loginTab).addClass('active');
            $(this.refs.registerContent).hide();
            $(this.refs.registerTab).removeClass('active');
        }
        else if( tabId == 'registerContent') {
            $(this.refs.registerContent).show();
            $(this.refs.registerTab).addClass('active');
            $(this.refs.loginContent).hide();
            $(this.refs.loginTab).removeClass('active');
        }
   }
   render() {
      return (
         <div className="logon-screen-half">
            <img className="logon-screen__logo" src="../resources/images/logo.png"/>
            <div className="credential-dialog">
                <a href="javascript:void(0)" ref="loginTab" className="credential-dialog__tab-link" onClick={() => this.openTab('loginContent')}>
                    <div className="tab-selector">
                        <i className="material-icons">person</i>
                        <label className="tab-selector__block-label">Login</label>
                    </div>
                </a>
                <a href="javascript:void(0)" ref="registerTab" className="credential-dialog__tab-link" onClick={() => this.openTab('registerContent')}>
                    <div className="tab-selector">
                        <i className="material-icons register-user-icon">person_add</i>
                        <label className="tab-selector__block-label">Register</label>
                    </div>
                </a>
                <div ref="loginContent" className="credential-dialog__tab-content">
                    <div className="material-input-group">      
                        <input 
                            onFocus={(event) => this.handleFocus(event)}
                            className="material-input-group__text-field" 
                            type="text" 
                            pattern="^([A-Za-z]|[0-9]|_)+$"
                            required />
                        <span className="material-input-group__animated-bar"></span>
                        <label className="material-input-group__label">Username</label>
                        <label className="material-input-group__error">Username should be alphanumeric</label>
                    </div>
                    <div className="material-input-group">      
                        <input 
                        onFocus={(event) => this.handleFocus(event)}
                        className="material-input-group__text-field" 
                        type="password"
                        pattern=".{8,}"
                        required />
                        <span className="material-input-group__animated-bar"></span>
                        <label className="material-input-group__label">Password</label>
                        <label className="material-input-group__error">Password should be minimum 8 characters</label>
                    </div>
                    <a className="small-link-primary" href="#">Forgot Password? Create a new password</a>
                    <MaterialButton title="Login"/>
                </div>
                <div ref="registerContent" className="credential-dialog__tab-content">
                    <div className="material-input-group">      
                        <input 
                        onFocus={(event) => this.handleFocus(event)}
                        className="material-input-group__text-field" 
                        type="text" 
                        pattern="^([A-Za-z]|[0-9]|_)+$"
                        title="Enter an alphanumeric username, '_' is allowed" 
                        required />
                        <span className="material-input-group__animated-bar"></span>
                        <label className="material-input-group__label">Username</label>
                        <label className="material-input-group__error">Username should be alphanumeric</label>
                    </div>
                    <div className="material-input-group">      
                        <input 
                        onFocus={(event) => this.handleFocus(event)}
                        className="material-input-group__text-field" 
                        type="password" 
                        pattern=".{8,}"
                        title="Enter a password with minimum 8 characters" 
                        required />
                        <span className="material-input-group__animated-bar"></span>
                        <label className="material-input-group__label">Password</label>
                        <label className="material-input-group__error">Password should be minimum 8 characters</label>
                    </div>
                    <div className="material-input-group">      
                        <input 
                        onFocus={(event) => this.handleFocus(event)}
                        className="material-input-group__text-field"
                        type="text"
                        title="Enter a ten digit mobile number"
                        pattern="[0-9]{10}"
                        required />
                        <span className="material-input-group__animated-bar"></span>
                        <label className="material-input-group__label">Phone Number</label>
                        <label className="material-input-group__error">Phone Number should be of 10 digits</label>
                    </div>
                    <MaterialButton title="Register"/>
                </div>
            </div>
         </div>
      );
   }
}

export default UserInformation;