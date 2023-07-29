import React from 'react'
import './ResultWordCloud.css'

export default function ResultWordCloud() {
  return (
    <div>
      <ul className="cloud" role="navigation" aria-label="Webdev word cloud">
        <li>
          <a href="#" data-weight="4">
            해맑다
          </a>
        </li>
        <li>
          <a href="#" data-weight="1">
            닮은연예인
          </a>
        </li>
        <li>
          <a href="#" data-weight="5">
            귀엽다
          </a>
        </li>
        <li>
          <a href="#" data-weight="8">
            밝은
          </a>
        </li>
        <li>
          <a href="#" data-weight="6">
            맞는 유형
          </a>
        </li>
        <li>
          <a href="#" data-weight="4">
            애교 많은
          </a>
        </li>
        <li>
          <a href="#" data-weight="5">
            호감형
          </a>
        </li>
        <li>
          <a href="#" data-weight="6">
            어울리는 직업
          </a>
        </li>
        <li>
          <a href="#" data-weight="2">
            예쁜눈
          </a>
        </li>
      </ul>
    </div>
  )
}
