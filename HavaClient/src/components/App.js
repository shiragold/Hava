/**
 * Created by shira on 26/08/2017.
 */
import React, { Component } from 'react';

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="header-container">
                    <img className="logo" src="/static/images/logo.png" />
                    <div className="nav">

                    </div>
                </div>
                <div className="landing-container">
                    <div className="background-container">
                        <img className="background1" src="/static/images/market1.png" />
                        <img className="background2" src="/static/images/market2.png" />
                        <img className="background3" src="/static/images/market3.png" />
                        <img className="background4" src="/static/images/market4.png" />
                        <div className="background"></div>
                        <h1 className="background-title">Bringing Farming Back<br />to the Community</h1>
                        {/*<video autoplay className="background" loop>*/}
                            {/*<source src="/static/images/market.mp4" type="video/mp4" />*/}
                            {/**/}
                        {/*</video>*/}
                    </div>
                </div>
                <div className="value-container">
                    <img src="/static/images/under_construct.png" />
                    <h2>We will be back soon with a FRESH look!</h2>
                </div>

            </div>
        );
    }
}
