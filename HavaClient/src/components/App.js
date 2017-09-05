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
                <div className="landing">
                    <div className="background-container">
                        <img className="background" src="/static/images/market.jpg" />
                        {/*<video autoplay className="background" loop>*/}
                            {/*<source src="/static/images/market.mp4" type="video/mp4" />*/}
                            {/**/}
                        {/*</video>*/}
                    </div>
                </div>

            </div>
        );
    }
}
