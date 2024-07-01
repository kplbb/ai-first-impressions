import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import imageCompression from 'browser-image-compression'
import { BiCheck } from 'react-icons/bi'
import { FaTrash } from 'react-icons/fa'
import { FaRegQuestionCircle } from 'react-icons/fa'
import { BiSmile } from 'react-icons/bi'
import robo from '../assets/gpt_01.png'
import background from '../assets/upload-bg.png'
import './Upload.scss'

function Upload() {
  //이미지 리사이징
  // const actionImgCompress = async (fileSrc) => {
  //   const options = {
  //     maxSizeMB: 0.1,
  //   }
  // }
  //input에서 value를 담기 위한 state 생성
  // const [account, setAccount] = useState({
  //   image: '',
  // })
  // const options = {
  //   maxSizeMB: 1,
  // }

  //파일 미리볼 url을 저장해줄 state
  const [fileImage, setFileImage] = useState('')

  // 파일 저장
  const saveFileImage = (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]))
  }

  // 파일 삭제
  const deleteFileImage = () => {
    URL.revokeObjectURL(fileImage)
    setFileImage('')
  }

  // 사진 가이드창 호버시 등장하도록
  function OpenGuide() {
    const hide = document.getElementById('hide')

    hide.style.display = 'block'
  }

  return (
    <div className="container">
      <div className="banner">
        {/* 사진업로드 테이블 */}
        <table>
          <tbody>
            <tr>
              <td>
                <p className="HeadText">
                  사진을 올려놓거나 <br />
                  눌러서 업로드 해주세요!
                </p>
                <div className="InputBox">
                  <input
                    id="image"
                    name="imgUpload"
                    type="file"
                    accept=".png, .jpeg, .jpg,image/*"
                    onChange={saveFileImage}
                  />
                  {/* 체크 클릭시 로딩페이지로 연결 */}
                  <Link to="/loading">
                    <button className="CheckBtn">
                      <BiCheck />
                    </button>
                  </Link>
                  <button
                    className="DeleteBtn"
                    onClick={() => deleteFileImage()}
                  >
                    <FaTrash />
                  </button>
                </div>
                <div className="InputImg">
                  {fileImage && <img alt="sample" src={fileImage} />}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        {/* 이미지 가이드 */}
        <div className="ImageGuide">
          <h4 onClick={OpenGuide}>
            이미지 가이드&nbsp;
            <FaRegQuestionCircle className="StrongText" />
          </h4>
          <ul className="HideGuide" id="Hide">
            <li>
              <BiSmile className="StrongText" />
              &nbsp;이미지는 JPEG, JPG, PNG형식의 5MB이하의 이미지만
              <br /> 가능합니다.
            </li>
            <li>
              <BiSmile className="StrongText" />
              &nbsp;가급적 자신의 분위기가 잘 드러나는 사진을 넣어주세요.
            </li>
            <li>
              <BiSmile className="StrongText" />
              &nbsp;예시) 좋아하는 곳에서 찍은 전신사진, 좋아하는 옷을 입은사진
            </li>
          </ul>
          <p>
            *최종 학습된 AI모델을 사용하므로 사진은 저장되지 않고
            <br />
            결과 도출에만 사용됩니다.
          </p>
        </div>
        {/* 로봇 이미지 영역 */}
        <div className="RoboBox">
          <img src={background} alt="" />
          {/* 모션 이미지 */}
          <div className="motionImg">
            <img className="robo" src={robo} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Upload
