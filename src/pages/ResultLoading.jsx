import { useNavigate } from 'react-router-dom'
import loadingAnimation from '../assets/loading_bg.png'
import loadingBot from '../assets/gpt_02.png'
import './ResultLoading.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ErrorPage from '../components/ErrorPage'
import { useLocation } from 'react-router'

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
        if (response.response == 200)
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
      )}
    </>
  )
}

export default ResultLoading
