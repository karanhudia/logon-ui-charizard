import React from 'react';
import MaterialButton from './MaterialButton.jsx';

class UserInformation extends React.Component {
   render() {
      return (
         <div className="logon-screen-half">
            <h3>Login and Register</h3>
            <input className="material-textfield" type="text" placeholder="Username" />
            <input className="material-textfield" type="password" placeholder="Password" />
            <MaterialButton title="Register"/>
         </div>
      );
   }
}

export default UserInformation;