import React from 'react';

class MaterialButton extends React.Component {
   constructor(props) {
       super(props);
       this.state = { 
           buttonLabel : this.props.title
       };
   }
   render() {
      return (
         <button className="material-button">{this.state.buttonLabel}</button>
      );
   }
}

export default MaterialButton;