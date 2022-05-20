import React from 'react'
import Hover from '../Hover/Hover'
import WorldCanvas from '../World/WorldCanvas'
import { motion } from 'framer-motion/dist/framer-motion'

export default function Cybetruck() {
  return (
      <>
       <motion.div  initial={{ opacity : 0 }}
      animate={{ opacity : 1}}
      exit={{ opacity : 0}}>
    <WorldCanvas/>
    <Hover/>
    </motion.div>
    </>
  )
}
