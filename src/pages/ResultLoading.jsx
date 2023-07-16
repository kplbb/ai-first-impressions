import { useNavigate } from 'react-router-dom'
import loadingAnimation from '../assets/loading_bg.png'
import loadingBot from '../assets/gpt_02.png'
const ResultLoading = () => {
  const navigate = useNavigate()
  return (
    <>
      <div
        className="ad"
        style={{
          height: '80px',
          backgroundColor: 'gray',
          marginBottom: '30px',
        }}
      ></div>
      <div className="container">
        <div className="banner">
          ai 모델링을 통한 첫인상을 분석중입니다....
          <img src={loadingAnimation} style={{ width: '90%' }} />
          <img src={loadingBot} style={{ width: '70%' }} />
          <div className="btn btn-1">Hover me</div>
        </div>
      </div>
    </>
  )
}

export default ResultLoading
