import React from 'react'
import { Link } from 'react-router-dom'
import ResultWordCloud from '../components/ResultWordCloud'
import loadingBot from '../assets/gpt_02.png'
import './Result.css'
const style = {
  display: 'block',
}

const sentenceStyle = {
  padding: '10%',
  backgroundColor: '#f2f7ff',
  borderRadius: '10px',
  marginBottom: '15px',
}
const Result = () => {
  return (
    <div className="container">
      <div className="banner">
        {/* style={{ display: 'block' }} */}
        <div className="HeadText">당신의 첫인상은?</div>
        {/* <div style={style}> */}
        <ResultWordCloud />
        {/* </div> */}
        {/* style={{ height: '200px', objectFit: 'auto' }} /> */}
        {/* <div class="single-line">
          <img src={loadingBot} style={{ width: '30%' }} />
          <h1 data-title="The final frontier">
            <span> 애교넘치는 호감형!</span>
          </h1>
        </div> */}
        <div className="containerr">
          <div class="imgg">
            <img src={loadingBot} style={{ width: '30%' }} />
            <div className="text">애교넘치는 호감형!</div>
          </div>
        </div>
        {/* <img
          src="https://howtodrawforkids.com/wp-content/uploads/2017/03/how-to-draw-a-face-step-by-step.jpg"
          style={{ width: '50%', borderRadius: '50%' }}
        />
        <div>
          <img src={loadingBot} style={{ width: '30%' }} />
          애교넘치는 호감형!
        </div> */}
        <div style={sentenceStyle}>
          인공지능이 판단한 당신의 첫인상은 '애교넘치는 호감형' 입니다
        </div>
        <div style={sentenceStyle}>
          본 테스트 결과는 전체의 0.33%에 속하며 가족, 친구 등 좋아하는 내
          사람들과 있을 때는 '술무새 역할’을 맡고 있습니다.
        </div>
        <div style={sentenceStyle}>
          또한 애기 같은 외모를 가진 당신은 천사 같은 모습으로 주위 사람들을
          포용하는 능력을 지니고 있는 것으로 보입니다.
        </div>
        <div style={sentenceStyle}>
          마지막으로 비슷한 분위기가 느껴지는 연예인은 김세정입니다.
        </div>
        {/* <div className="summary_container">
          <div className="sectionOne"></div>
          <div className="sectionTwo"></div> */}
        {/* <div> */}
        <div className="ff">A</div> <div className="gg">B</div>
        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  )
}

export default Result
