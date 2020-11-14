import React, { Component } from 'react';

export default class HomePage extends Component {
    render() {
        return(
            <section>
                <form id="main-display">
              <section class="show-main-weather">
                <label for="main-weather">Top Weather Feature</label>
                <select type="text" name="top-weather" required>
                  <option defaultValue="Current Conditions">Select</option>
                  <option>Current Conditions</option>
                  <option>7 Day Forecast</option>
                  <option>Doppler Radar</option>
                  <option>3 Day Forecast</option>
                  <option>Rain/Snow fall total</option>
                </select>
              </section>
              <section class="second-weather">
                <label for="second-weather">Weather feature (will have title for selected feature)</label>
                <select type="text" name="second-weather" required>
                  <option defaultValue="Current Conditions">Select</option>
                  <option>7 Day Forecast</option>
                  <option>Doppler Radar</option>
                  <option>3 Day Forecast</option>
                  <option>Rain/Snow fall total</option>
                </select>
              </section>
              <section class="second-weather">
                <label for="second-weather">Weather feature (will have title for selected feature)</label>
                <select type="text" name="second-weather" required>
                  <option defaultValue="Current Conditions">Select</option>
                  <option>7 Day Forecast</option>
                  <option>Doppler Radar</option>
                  <option>3 Day Forecast</option>
                  <option>Rain/Snow fall total</option>
                </select>
              </section>
              <section class="second-weather">
                <label for="second-weather">Weather feature (will have title for selected feature)</label>
                <select type="text" name="second-weather" required>
                  <option defaultValue="Current Conditions">Select</option>
                  <option>7 Day Forecast</option>
                  <option>Doppler Radar</option>
                  <option>3 Day Forecast</option>
                  <option>Rain/Snow fall total</option>
                </select>
              </section>
              
              <section class="button-section">
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
              </section>
              </form>
            </section>
        )
    }
}