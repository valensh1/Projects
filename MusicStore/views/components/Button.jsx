const React = require('react');

class Button extends React.Component {
    render(){
        return (
            <form action={this.props.end} method='post'>
            <button id="trash" type="submit" value="DELETE"><i className="trash" className="fa fa-trash-o fa-2x"></i></button>
            </form>
        )
    }
}

module.exports = Button;