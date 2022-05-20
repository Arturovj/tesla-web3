import React from 'react'
import WorldCanvas from '../World/WorldCanvas'
import { motion } from 'framer-motion/dist/framer-motion'
import HoverCybertruck from '../HoverCybertruck/HoverCybertruck'

export default function Cybetruck() {
  return (
      <>
       <motion.div  initial={{ opacity : 0 }}
      animate={{ opacity : 1}}
      exit={{ opacity : 0}}>
    <WorldCanvas/>
    <HoverCybertruck/>
    </motion.div>
    </>
  )
}
