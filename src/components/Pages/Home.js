import React from 'react'
import GridLoader from "react-spinners/GridLoader"
import './Home.css'

import Hover from '../Hover/Hover'
import WorldCanvas from '../World/WorldCanvas'
import { useState, useEffect } from 'react'

export default function Home() {

    const [loading, setLoading] = useState(false)
    useEffect(() =>{
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        },1500)
    }, [])



  return (
    <>
    <div className='Home'>

   <div className='loading-home'>
    { loading ? <GridLoader  color={'#D0021B'}  loading={loading} size={100}/> : 
     <WorldCanvas/>
    }
    </div>
   

    <Hover/>
     
    </div>
    </>
  )
}
