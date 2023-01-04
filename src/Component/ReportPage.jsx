import React from 'react'
import '../Css/Report.css'

const ReportPage = () => {
  return (
    <div>
      <header id='header'>
        <section>
          <div id="header-content">
            <div id="header-title">
              <h3>Cryptomania</h3>
            </div>
            <div id="header-body">
            <p>Bitcoin and other cryptocurrencies like Ethereum have grown as digital alternatives to money.  <b>Read More</b></p>
            </div>
          </div>
          <div id="sub-header">
            <div className='sub-header-content-one'>              
              <h3>Bitcoin! What Happened?</h3>
              <div id="header-body">
              <p>It certainly seems like bitcoin's bubble has burst as investors have lost confidence in the crypto sector.  <b>Read More</b></p>
              </div>
            </div>
            <div className='sub-header-content-two'>              
              <h3>Web 3, and others -</h3>
              <div id="header-body">
              <p>Centralization has helped onboard billions of people to the World Wide Web and created.  <b>Read More</b></p>
              </div>
            </div>
          </div>
        </section>
      </header>


      <section id='report-new'>

        {/* WEB 3 */}

        <div className="report-content">
          <h2>Web 3</h2>
          <div id='report-box'>
              <div className="report-content-image">
                <div className="report-content-text">
                  <h3>Next level data security</h3>
                  <div className="report-content-text-body">
                  <p>It certainly seems like bitcoin's bubble has burst as investors have lost confidence in the crypto sector.  <b>Read More</b></p>
                  </div>
                </div>
              </div>
              <div className="report-content-image">
                <div className="report-content-text">
                  <h3>Gaming in Web 3</h3>
                  <div className="report-content-text-body">
                  <p>Bitcoin and other cryptocurrencies like Ethereum have grown as digital alternatives to money.  <b>Read More</b></p>
                  </div>
                </div>
              </div>
          </div>
        </div>

        {/* ETHEREUM */}

        <div className="report-content">
          <h2>Ethereum</h2>
          <div id='report-box'>
              <div className="report-content-image-two">
                <div className="report-content-text-two">
                  <h3>Payment with Ethereum</h3>
                  <div className="report-content-text-body-two">
                    <p>You can purchase Ethereum with a bank account through CoinGate, or by using your credit or debit card.  <b>Read More</b></p>
                  </div>
                </div>
              </div>
              <div className="report-content-image-two">
                <div className="report-content-text-two">
                  <h3>ethereum price prediction</h3>
                  <div className="report-content-text-body-two">
                    <p>Given these factors, conservative predictions of Ether say it will reach at least $4,000 by 2022.  <b>Read More</b></p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* OLDER REPORT */}
      <section id='innovative-report'>
        <div id="innovative-report-content">
        <h2>Innovative Report</h2>
        <div id="report">
          <div className="report-image-box">
            <div className="report-text">
              <div className="report-title">
                <h3>Cryptomania</h3>
              </div>
              <div className="report-body">
              <p>Bitcoin and other cryptocurrencies like Ethereum have grown as digital alternatives to money.  <b>Read More</b></p>
              </div>
            </div>
          </div>
          <div className="report-image-box">
            <div className="report-text">
              <div className="report-title">
                <h3>Bitcoin! What Happened?</h3>
              </div>
              <div className="report-body">
              <p>It certainly seems like bitcoin's bubble has burst as investors have lost confidence in the crypto sector.  <b>Read More</b></p>
              </div>
            </div>
          </div>
          <div className="report-image-box">
            <div className="report-text">
              <div className="report-title">
                <h3>Web 3, and others - </h3>
              </div>
              <div className="report-body">
              <p>Centralization has helped onboard billions of people to the World Wide Web and created.  <b>Read More</b></p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

          {/* SUBSCRIBE */}
    <section>
      <div id="subscribe">
        <div id="subscribe-content">
          <h3>Stay up to date with research</h3>
          <form action="/url" method="GET">
            <input type='email' placeholder="Enter your email" />
            <button type="submit">Subscribe</button> 
          </form>
        </div>
      </div>
    </section>

    {/* BLANK */}
    <section id='blank'></section>
    <section id='blank-two'></section>

    </div>
  )
}

export default ReportPage