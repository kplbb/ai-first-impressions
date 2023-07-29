import React, { useEffect } from 'react'

const GoogleAdSense = (props) => {
  const { dataAdSlot } = props
  useEffect(() => {
    // try {
    //   ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    // } catch (e) {}
    window.adsbygoogle = window.adsbygoogle || []
    window.adsbygoogle.push({})
  }, [])

  return (
    <>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-6395807987779990"
        data-ad-slot={dataAdSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </>
  )
}

export default GoogleAdSense
