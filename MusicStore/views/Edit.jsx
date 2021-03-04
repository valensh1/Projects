const React = require('react');
const Layout = require('./Layout.jsx');

class Edit extends React.Component{
    render(){
        return (
                    <Layout>
                    <form action="/music" id="show-back-button">
                            <input type="submit" value="BACK"></input>
                        </form>
                    <form action={`/music/${this.props.music._id}?_method=PUT`} method="POST">
                    Name: <input type="text" name="name" value={this.props.music.name}/> <br/>
                    Description: <input type="text" name="description" value={this.props.music.description}/> <br/>
                    Image: <input type="text" name="image" value={this.props.music.image}/>  <br/>
                    Price: <input type="number" name="price" value={this.props.music.price}/> <br/>
                    Qty: <input type="number" name="quantity" value={this.props.music.quantity}/> <br/>
                    <input type="submit" name="" value="UPDATE"/>
                    </form>
                    </Layout>
                )
            }  
    }


module.exports = Edit;