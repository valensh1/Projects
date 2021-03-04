const React = require("react");

class Layout extends React.Component {
    render(){
        return (
            <html>
                <head>
                    <title id="title" className="tracking-in-expand-fwd">ALL THINGS MUSIC</title>
                    <link rel="stylesheet" href="/css/style.css"/>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"></link>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                    <h1>ALL THINGS MUSIC</h1>
                    <form id="new-music-button" action='/music/new'>
                <input type="submit" value="Add New Music"></input>
            </form>
                    
                </head>
                <body>
                   
                    {this.props.children}
                </body>

            </html>
        )
    }
}

module.exports = Layout;