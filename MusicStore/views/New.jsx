const React = require('react');
const Layout = require('./Layout');

class New extends React.Component {
    render() {
        return (
            <Layout>
            <form action="/music">
              <input type="submit" value="BACK"></input>
            </form>
            <form action="/music" method="POST">
            Name: <input type="text" name="name"/> <br/>
            Description: <input type="text" name="description"/> <br/>
            Image: <input type="text" name="image"/> <br/>
            Price: <input type="number" name="price"/> <br/>
            Qty: <input type="number" name="quantity"/> <br/>
            <input type="submit" name="" value="Add New Music"/>
            </form>
            </Layout>
        )
    }
}

module.exports = New;