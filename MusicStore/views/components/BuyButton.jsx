const React = require('react');
const Buy = require('../Buy.jsx');

class BuyButton extends React.Component {
    sayHi() {
        console.log('hello there');
    }
    render(){
        return (
            <div>
            {/* <button onClick={this.sayHi}>CLICK ME</button> */}
            <button><a href={this.props.purchase}>BUY HERE</a></button>
            </div>
            
        )
    }
}

module.exports = BuyButton;