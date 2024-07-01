import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router'
import axios from 'axios'
import ErrorPage from '../components/ErrorPage'
import GoogleAdSense from '../components/GoogleAdSense'
import loadingAnimation from '../assets/loading_bg.png'
import loadingBot from '../assets/gpt_02.png'
import './ResultLoading.scss'

const ResultLoading = ({}) => {
  const [error, setError] = useState(false)
  const navigate = useNavigate()
  const { state } = useLocation()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reqUrl = ''
        // process.env[`REACT_APP_` + process.env.REACT_APP_MODE + `_API_URL`] +
        // url

        const requestHeaders = {
          Authorization: 'token',
          'Content-Type': 'application/json',
        }

        const response = await axios({
          method: 'POST',
          url: reqUrl,
          headers: requestHeaders,
          data: state,
        })
        if (response.response === 200)
          navigate('/result', { state: 'response.data' })
      } catch (error) {
        setError(true)
        console.log(error)
      }
    }
    if (state != null || undefined) {
      fetchData()
    }
  })

  return (
    <>
      {error ? (
        <ErrorPage />
      ) : (
        <>
          <div className="ad">
            <GoogleAdSense dataAdSlot="9452118767" />
            {/* <script
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1069105273152877"
              crossOrigin="anonymous"
            ></script>
            <ins
              className="adsbygoogle"
              style={{ display: 'block' }}
              data-ad-client="ca-pub-1069105273152877"
              data-ad-slot="2190219184"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
            <script>(adsbygoogle = window.adsbygoogle || []).push({});</script> */}
          </div>
          <div className="container">
            <div className="banner">
              ai 모델링을 통한 첫인상을 분석중입니다....
              <div>최대 1분 정도 걸릴 수 있습니다.</div>
              <img
                src={loadingAnimation}
                className="loading-animation"
                alt=""
              />
              <img
                src={loadingBot}
                className="loading-bot box bounce-1"
                alt=""
              />
              <div className="btn btn-1">Loading...</div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default ResultLoading
