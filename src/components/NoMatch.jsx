import React from 'react'
import loadingAnimation from '../assets/loading_bg.png'

const NoMatch = () => {
  return (
    <div>
      <div className="container">
        <div className="banner" style={{ height: '70vh' }}>
          <img
            src={loadingAnimation}
            className=""
            style={{ width: '70%' }}
            alt="loading robot"
          />
          <div className="HeadText">
            404 <br />
            Page not found
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoMatch
