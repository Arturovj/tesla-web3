import React from 'react'

export default function HomeNft(props) {
  return (
      <>
    <h1>Welcome</h1>
    
      <p>{props.currentAccount}</p>
      <p>{props.balance} ETH</p>
      </>
  )
}
