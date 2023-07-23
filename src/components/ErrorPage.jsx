import React from 'react'
import loadingAnimation from '../assets/loading_bg.png'

export default function ErrorPage() {
  return (
    <div className="container">
      <div className="banner" style={{ height: '70vh' }}>
        <img src={loadingAnimation} className="" style={{ width: '70%' }} />
        <div className="HeadText">
          오류가 있었습니다. <br />
          다시 시도해주세요.
        </div>
      </div>
    </div>
  )
}
