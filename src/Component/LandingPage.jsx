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
            <h1>Helping evolve the Web 3</h1>
            <h3>A Blockchain Venture Studio</h3>
            <button> Get in touch </button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default LandingPage