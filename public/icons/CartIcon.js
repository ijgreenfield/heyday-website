import React from 'react'

export default function CartIcon({onClick}) {
  return (
    <div onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="-1 -1 25 25" id="bag-dark" y="204"><path d="M5.398 5V3a2 2 0 012-2h8a2 2 0 012 2v2M.898 5.5h21v17h-21z" stroke="#333F48"/></svg>
    </div>
  )
}
