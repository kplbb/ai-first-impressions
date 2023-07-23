import { useNavigate } from 'react-router-dom'
import loadingAnimation from '../assets/loading_bg.png'
import loadingBot from '../assets/gpt_02.png'
import './ResultLoading.css'
const ResultLoading = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="ad"></div>
      <div className="container">
        <div className="banner">
          ai 모델링을 통한 첫인상을 분석중입니다....
          <img src={loadingAnimation} className="loading-animation" />
          <img src={loadingBot} className="loading-bot box bounce-1" />
          <div className="btn btn-1">Loading...</div>
        </div>
      </div>
    </>
  )
}

export default ResultLoading
