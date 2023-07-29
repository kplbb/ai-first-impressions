import React from 'react'
import './ResultWordCloud.css'

export default function ResultWordCloud() {
  return (
    <div>
      <ul className="cloud" role="navigation" aria-label="Webdev word cloud">
        <li>
          <a href="#" data-weight="4">
            HTTP
          </a>
        </li>
        <li>
          <a href="#" data-weight="1">
            Ember
          </a>
        </li>
        <li>
          <a href="#" data-weight="5">
            Sass
          </a>
        </li>
        <li>
          <a href="#" data-weight="8">
            HTML
          </a>
        </li>
        <li>
          <a href="#" data-weight="6">
            FlexBox
          </a>
        </li>
        <li>
          <a href="#" data-weight="4">
            API
          </a>
        </li>
        <li>
          <a href="#" data-weight="5">
            VueJS
          </a>
        </li>
        <li>
          <a href="#" data-weight="6">
            Grid
          </a>
        </li>
        <li>
          <a href="#" data-weight="2">
            Rest
          </a>
        </li>
      </ul>
    </div>
  )
}
