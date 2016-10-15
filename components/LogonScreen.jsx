import React from 'react';
import CoverImage from './CoverImage.jsx';
import UserInformation from './UserInformation.jsx';

class LogonScreen extends React.Component {
   render() {
      return (
          <div>
            <CoverImage/>
            <UserInformation/>
          </div>
      );
   }
}

export default LogonScreen;