import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ResultWordCloud from '../components/ResultWordCloud'
import loadingBot from '../assets/gpt_02.png'
import './Result.css'
import textBubble from '../assets/text_bg.png'
import { useLocation } from 'react-router'
import { BsLink45Deg } from 'react-icons/bs'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { BsFillShareFill } from 'react-icons/bs'
import KakaoLogo from '../assets/KakaoLogo.png'
const { Kakao } = window

const Result = () => {
  const [data, setData] = useState()
  const [resultId, setResultId] = useState()

  const { state } = useLocation()

  useEffect(() => {
    if (state != undefined || null) {
      console.log(state)
      setData(state)
    }
  }, [state])
  useEffect(() => {
    Kakao.cleanup()
    Kakao.init('a04b2b086e1490965f9e5456d3fb6345')
    console.log(Kakao.isInitialized()) //true
  }, [])

  const copyLink = (e) => {
    e.preventDefault()
    const currentURL = window.location.href
    const input = document.createElement('input')
    input.value = currentURL
    input.style.position = 'absolute'
    input.style.left = '-9999px'
    document.body.appendChild(input)
    input.select()
    try {
      document.execCommand('copy')
      alert('URL copied to clipboard!')
    } catch (error) {
      console.error('Failed to copy URL to clipboard: ', error)
    }
    document.body.removeChild(input)
  }
  const shareKakao = () => {
    // const realUrl = 'https://mm-test-maker.web.app/'
    const realUrl = 'google.ca'
    // 로컬 주소 (localhost 3000 같은거)
    // const resultUrl = window.location.href
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '오늘의 디저트',
        description: '아메리카노, 빵, 케익',
        imageUrl:
          'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          webUrl: 'https://developers.kakao.com',
        },
      },
      social: {
        likeCount: 1234,
        commentCount: 431,
        sharedCount: 8493,
        viewCount: 47298,
        subscriberCount: 3489,
      },
      buttons: [
        {
          title: 'see results!',
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
          },
        },
        {
          title: '나도 해보기!',
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
          },
        },
      ],
    })
  }
  return (
    <div className="container">
      <div className="banner">
        {/* {data !== null && data !== undefined ? ( */}
        <>
          <div className="HeadText">당신의 첫인상은?</div>
          <ResultWordCloud />
          <div className="user-img">
            <img src={loadingBot} />
          </div>

          <div className="res-container">
            <div className="res-img-container">
              <img src={loadingBot} alt="Image" />
            </div>
            <div className="res-text-container">
              <p>애교넘치는 호감형!</p>
            </div>
          </div>

          <div className="result-blocks">
            인공지능이 판단한 당신의 첫인상은 '애교넘치는 호감형' 입니다
          </div>
          <div className="result-blocks">
            본 테스트 결과는 전체의 0.33%에 속하며 가족, 친구 등 좋아하는 내
            사람들과 있을 때는 '술무새 역할’을 맡고 있습니다.
          </div>
          <div className="result-blocks">
            또한 애기 같은 외모를 가진 당신은 천사 같은 모습으로 주위 사람들을
            포용하는 능력을 지니고 있는 것으로 보입니다.
          </div>
          <div className="result-blocks">
            마지막으로 비슷한 분위기가 느껴지는 연예인은 김세정입니다.
          </div>

          <div className="summary-container">
            <div className="summary-left">
              잘 맞는 유형 <br />
              어리바리 담당
            </div>
            <div className="summary-right">
              안 맞는 유형 <br />
              TMT 담당
            </div>
          </div>

          <div className="share-container">
            <div className="share-img-container">
              <img src={loadingBot} alt="Image" />
            </div>
            <div className="share-text-container">
              <img src={textBubble} alt="Image" />
              <p>친구들이 생각하는 내 첫인상은?</p>
            </div>
          </div>

          <div className="flex-container">
            <div className="flex-item-left">
              내 결과 공유하기 <BsFillShareFill />
            </div>
          </div>

          <section className="share-icon-container">
            <div className="icon">
              <BsLink45Deg
                style={{ height: '40px', width: '40px' }}
                onClick={(e) => copyLink(e)}
              />
            </div>
            <div className="icon">
              {/* <Modal /> */}
              <img
                src={KakaoLogo}
                className=""
                style={{ width: '10%' }}
                alt={'Kakao Logo'}
                onClick={() => {
                  shareKakao()
                }}
              />
            </div>
            <div className="icon"></div>
          </section>
        </>
        {/* ) : ( */}
        {/* <div c  lassName="">no data yet</div> */}
        {/* )} */}
      </div>
    </div>
  )
}

export default Result
