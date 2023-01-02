import React from 'react'
import '../Css/LandingPage.css'
import movingImage1 from '../Assets/svg/moving image1.svg'
import movingImage2 from '../Assets/svg/moving image2.svg'
import movingImage3 from '../Assets/svg/moving image3.svg'
import movingImage4 from '../Assets/svg/moving image4.svg'

const LandingPage = () => {
  return (
    <div>

      <main>
        <section>
          <div id='moving-images'>
            <img src={movingImage1} alt="" />
            <img src={movingImage2} alt="" />
            <img src={movingImage3} alt="" />
            <img src={movingImage4} alt="" />
          </div>
          <div id='landing-content'>
            <h1>Shaping the future of Web 3</h1>
            <h3>A Blockchain Venture Studio</h3>
            <button> Get in touch </button>
          </div>
        </section>
      </main>

      <section id='what-we-do'>
        <div className="what-we-do-content">
          <h2>What we do</h2>
          <div id='what-we-do-box'>
              <div className="what-we-do-image">
                <div className="what-we-do-text">
                  <h3>Build as a service</h3>
                </div>
              </div>
              <div className="what-we-do-image">
                <div className="what-we-do-text">
                  <h3>Solution Development</h3>
                </div>
              </div>
            </div>
            <div id='what-we-do-box'>
              <div className="what-we-do-image-two">
                <div className="what-we-do-text">
                  <h3>Technomics Research</h3>
                </div>
              </div>
              <div className="what-we-do-image-two">
                <div className="what-we-do-text">
                  <h3>Innovative Report</h3>
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* REPORT */}
      <section id='innovative-report'>
        <div id="innovative-report-content">
        <h2>Innovative Report</h2>
        <div id="report">
          <div className="report-image">
            <div className="report-text">
              <div className="report-title">
                <h3>Cryptomania</h3>
              </div>
              <div className="report-body">
              <p>Bitcoin and other cryptocurrencies like Ethereum have grown as digital alternatives to money.  <b>Read More</b></p>
              </div>
            </div>
          </div>
          <div className="report-image">
            <div className="report-text">
              <div className="report-title">
                <h3>Bitcoin! What Happened?</h3>
              </div>
              <div className="report-body">
              <p>It certainly seems like bitcoin's bubble has burst as investors have lost confidence in the crypto sector.  <b>Read More</b></p>
              </div>
            </div>
          </div>
          <div className="report-image">
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
    </div>
  )
}

export default LandingPage