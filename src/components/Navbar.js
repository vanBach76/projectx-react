import React, { Component } from 'react'

class Navbar extends Component {


    render() {
        let style = {
            padding: '0px 10px'
         }
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light" style={ style }>
                    <a className="navbar-brand" href="#">PD</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link" href="#">Data<span className="sr-only">(current)</span></a>
                            <a className="nav-item nav-link" href="#">Visualize</a>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar