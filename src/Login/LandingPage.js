import React, { Component } from 'react';

export default class LandingPage extends Component {
    render() {
        return( 
            <main role="main">
                <header role="banner">
                    <h2>The Weather You Need Now</h2>
                </header>
                <section>
                    <header>
                        <h3>Decide What Weather Features are Essential</h3>
                    </header>
                    <p>[<em>images of short/long term forecast or doppler radar showing severe weather</em>]</p>
                    <p>Your Weather Now gives the user the control to decide what weather features are the most important. Would you prefer to have the short term forecast immediately each time you visit or would you rather have the doppler ready to go? Perhaps you want the 7 Day Forecast with Pollen Alerts in March or April, but 3 Day Forecast with emphasis on overnight lows in the Winter. Customize as you please and make it Your Weather Now!</p>
                </section>
                <section>
                    <header>
                        <h3>Start Customizing</h3>
                    </header>
                    <p>[<em>image of easy drop down interface to select your features</em>]</p>
                    <p>A simple interface to select the weather you want to see immediately and lock the display for as long as you desire. As the season changes, unlock the display and customize to your liking. Perhaps you want tidal information at the top or tropics information. Easy as unlocking the toggle and selecting the feature.</p>
                </section>
                <section>
                    <header>
                        <h3>Location and Features Saved</h3>
                    </header>
                    <p>[<em>image of sample zipcode with appropriate geographical display</em>]</p>
                    <p>The weather you need now each time you load. No more seeing the weather important to someone else.</p>
                </section>
                <section>
                    <header>
                        <h3>Get Your Weather Now</h3>
                    </header>
                    <form class='signup-form'>
                        <div>
                        <label for="first-name">First name</label>
                        <input placeholder='First Name' type="text" name='first-name' id='first-name' />
                        </div>
                        <div>
                        <label for="last-name">Last name</label>
                        <input type="text" name='last-name' id='last-name' placeholder='Last Name' />
                        </div>
                        <div>
                        <label for="username">Email</label>
                        <input type="text" name='username' id='username' />
                        </div>
                        <div>
                        <label for="password">Password</label>
                        <input type="password" name='password' id='password' />
                        </div>
                        <button type='submit'>Sign Up</button>
                    </form>
                </section>
            </main>
        )
    }
}