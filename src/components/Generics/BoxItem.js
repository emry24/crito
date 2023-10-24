import React from 'react'

const BoxItem = ( text ) => {
  return (
    <div>
        <h3>{text.title}</h3>
        <p>{text.subtitle}</p>
    </div>
  )
}

export default BoxItem