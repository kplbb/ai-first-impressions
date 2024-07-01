import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import GoogleAdSense from '../components/GoogleAdSense'
import bot from '../assets/gpt_01.png'
import './Home.scss'

const Home = () => {
  const [count, setCount] = useState(0)
  const increase = () => {
    setCount(count + 1)
  }
  return (
    <div className="container" style={{ height: '100vh', overflow: 'hidden' }}>
      {/* 메인컨텐츠 */}
      <div className="banner">
        {/* 참여자수 카운팅 */}
        <div className="numText">
          <p>
            참여자수 <span>{count}</span>명
          </p>
        </div>
        {/* 모션 텍스트 */}
        <ul className="motionText">
          <li>호감형</li>
          <li>밝은</li>
          <li className="colorVo">닮은연예인</li>
          <li>애교많은</li>
          <li>해맑은</li>
          <li>예쁜눈</li>
          <li>귀여운</li>
          <li>활발한</li>
          <li>어울리는 직업</li>
          <li>밝은</li>
          <li>청순한</li>
        </ul>
        {/* 모션 이미지 */}
        <div className="motionImg">
          <img className="robo" src={bot} alt="" />
        </div>
        {/* 제목과 btn */}
        <div className="bottomText">
          <h1 className="HeadText">
            AI가 보는 <br />
            나의 첫인상
          </h1>
          <Link to="/upload">
            <div className="HomeBtn">
              <div className="inner"></div>
              <button type="submit" onClick={increase}>
                첫인상 물어보러 가기
              </button>
            </div>
          </Link>
          <p>Click!</p>
        </div>
      </div>

      {/* 광고 영역 */}
      <div className="ad">
        <GoogleAdSense dataAdSlot="5314134026" />
      </div>
    </div>
  )
}

export default Home
