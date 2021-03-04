const React = require('react');
const Layout = require('./Layout.jsx');
const Button = require('./components/Button.jsx');
const EditButton = require('./components/EditButton.jsx');



class Index extends React.Component {
    render() {
        const indexedMusic = this.props.music;
        return (
        <Layout>
            
           <div className="music-list-container">
               {
                   indexedMusic.map((artists, index) => {
                       return (
                    <div className="artist-album">
                        <Button end={`/music/${artists._id}?_method=DELETE`}></Button>
                        <a href={`music/${artists._id}/edit`}><i id="edit" className="fa fa-edit"></i></a>
                        <h2>{artists.name}</h2>
                        <h3>Album: {artists.description}</h3>
                        <a href={`music/${artists._id}`}><img src = {artists.image}/></a>
                        <h4>Price: ${artists.price}</h4>
                        <h5>Qty: {artists.quantity <=0 ? `OUT OF STOCK`: artists.quantity}</h5>
                        <a href={`/music/${artists._id}`}/>
                        {/* <button>Buy</button> */}
                        <form action={`/music/buy/${artists._id}`} id="buy-button">
                            <input type="submit" value="BUY"></input>
                        </form>
                        
                        
                    </div>
                       )
                   })
               }
           </div> 
        </Layout>
        )
    }
}



module.exports = Index;