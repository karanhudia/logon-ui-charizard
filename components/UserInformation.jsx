import React from 'react';
import MaterialButton from './MaterialButton.jsx';

class UserInformation extends React.Component {
   constructor() {
       super();
       this.openTab = this.openTab.bind(this);
   }
   componentDidMount () {
       this.openTab('loginContent');
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
            <div className="credential-dialog">
                <a href="javascript:void(0)" ref="loginTab" className="credential-dialog__tab-link" onClick={() => this.openTab('loginContent')}>
                    <div className="tab-selector">
                        <i className="material-icons">person</i>
                        <label className="tab-selector__block-label">Login</label>
                    </div>
                </a>
                <a href="javascript:void(0)" ref="registerTab" className="credential-dialog__tab-link" onClick={() => this.openTab('registerContent')}>
                    <div className="tab-selector">
                        <i className="material-icons">person_add</i>
                        <label className="tab-selector__block-label">Register</label>
                    </div>
                </a>
                <div ref="loginContent" className="credential-dialog__tab-content">
                    <input className="material-textfield" type="text" placeholder="Username" />
                    <input className="material-textfield" type="password" placeholder="Password" />
                    <MaterialButton title="Login"/>
                </div>
                <div ref="registerContent" className="credential-dialog__tab-content">
                    <input className="material-textfield" type="text" placeholder="Username" />
                    <input className="material-textfield" type="password" placeholder="Password" />
                    <input className="material-textfield" type="number" placeholder="Phone Number" />
                    <MaterialButton title="Register"/>
                </div>
            </div>
         </div>
      );
   }
}

export default UserInformation;