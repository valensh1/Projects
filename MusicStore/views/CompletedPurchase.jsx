const React = require('react');
const Layout = require("./Layout.jsx");
const Button = require('./components/Button');
const BuyButton = require('./components/BuyButton.jsx');

class CompletedPurchase extends React.Component {
    render() {
        const musicProps = this.props.music
        return (
        <Layout>
            <div className="artist-album">
                        <form action="/music" id="show-back-button">
                            <input type="submit" value="BACK"></input>
                        </form>
                        <br/>
                        <Button end={`${musicProps._id}?_method=DELETE`}></Button>
                        <a id="show-edit" href={`${musicProps._id}/edit`}><i id="edit" className="fa fa-edit"></i></a>
                        <h2>{musicProps.name}</h2>
                        <h3>Album: {musicProps.description}</h3>
                        <a href={`music/${musicProps._id}`}><img src = {musicProps.image}/></a>
                        <h4>Price: ${musicProps.price}</h4>
                        <h5>Qty: {musicProps.quantity <= 0 ? `OUT OF STOCK` : musicProps.quantity}</h5>
                        <a href={`/music/${musicProps._id}`}/>
                        <form action={`/music/${this.props.music._id}?_method=PUT`} method="POST">
                            <input type="submit" value="BUY"></input>
                        </form>
                        <BuyButton/>
            </div>
        </Layout>

        )
    }
}

module.exports = CompletedPurchase;