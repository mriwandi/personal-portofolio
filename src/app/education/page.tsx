'use client'
import { motion } from 'framer-motion'

export default function Skills () {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className='flex flex-col gap-5 text-zinc-300'
    >
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='text-7xl font-bold'
      >
        <span className='text-white'>Educational </span>
        <span className='text-blue-500'>Journey</span>
      </motion.div>
    </motion.div>
  )
}