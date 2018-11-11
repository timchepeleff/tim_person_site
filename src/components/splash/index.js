import React from 'react';

import './_splash.scss';
import tim from './tim-chepeleff.png'

const Splash = props =>
  (<section className="splash" id="splash">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-12 box">
          <div className="row">
            <div className="col-12 text-center">
              <h1>Who is <span className='tim'>'Tim'</span>?</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <p className='mt-3'>
                My name is Tim Chepeleff and I’m a developer with a penchant for the web, interactive UI’s, and straightforward user experiences. I embrace opportunities to solve complex problems efficiently. Able to understand both the developer and business perspectives I can address technical issues with comprehensive solutions.
              </p>

              <nav className="text-center mt-4">
                <a href="https://github.com/timchepeleff" target="_blank">Github </a> |
                <a href="https://www.linkedin.com/in/timchepeleff" target="_blank"> LinkedIn </a> |
                <a href="https://twitter.com/timchep/" target="_blank"> Twitter </a> |
                <a href="https://instagram.com/timchep/" target="_blank"> Instagram</a>
              </nav>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-12">
          <img className="img-fluid mx-auto" src={tim} alt="Logo" />;
        </div>
      </div>
    </div>
  </section>);

export default Splash;
