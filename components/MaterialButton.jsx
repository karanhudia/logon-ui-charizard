import React from 'react';

class MaterialButton extends React.Component {
   constructor(props) {
       super(props);
       this.state = { 
           buttonLabel : this.props.title
       };
       this.handleClick = this.handleClick.bind(this);
       this.rippleEffect = this.rippleEffect.bind(this);
   }
   componentDidMount() {
       $(this.refs.ripple).on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', function(e) {
            $(this).removeClass('is-active');
       });
   }
   handleClick(event) {
       this.rippleEffect(event);
   }
   rippleEffect(event) {
        var $offset = $(this.refs.ripple.offsetParent).offset();
        var x = event.pageX - $offset.left;
        var y = event.pageY - $offset.top;
        
        $(this.refs.rippleCircle).css({
            top: y + 'px',
            left: x + 'px'
        });
        $(this.refs.ripple).addClass('is-active');
   }
   render() {
      return (
          <button onClick={(event) => this.handleClick(event)} className="material-button material-button--primary" type="button">
             <div ref="ripple" className="material-button-ripple material-button__js-ripple">
                <span ref="rippleCircle" className="material-button-ripple__circle"></span>
             </div>
             {this.state.buttonLabel}
          </button>
      );
   }
}

export default MaterialButton;