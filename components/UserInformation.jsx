import React from 'react';
import MaterialButton from './MaterialButton.jsx';

class UserInformation extends React.Component {
   render() {
      return (
         <div className="logon-screen-half">
            <div className="credential-dialog">
                <div className="tab-selector">
                    <i className="material-icons">person</i>
                    <label className="tab-selector__block-label">Login</label>
                </div>
                <div className="tab-selector">
                    <i className="material-icons register-user-icon">person_add</i>
                    <label className="tab-selector__block-label">Register</label>
                </div>
                <input className="material-textfield" type="text" placeholder="Username" />
                <input className="material-textfield" type="password" placeholder="Password" />
                <MaterialButton title="Register"/>
            </div>
         </div>
      );
   }
}

export default UserInformation;