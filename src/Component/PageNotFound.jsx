import React from 'react'
import '../Css/PageNotFound.css'
import movingImage1 from '../Assets/svg/moving image1.svg'

const PageNotFound = () => {
  return (
    <div id='notfound404'>
      <main id='notfound'>
        <div id='notfound-image'>
          <img src={movingImage1} alt="" />
        </div>
        <div id='notfound-text'>
          <h2>Page not found</h2>
        </div>
      </main>
    </div>
  )
}

export default PageNotFound