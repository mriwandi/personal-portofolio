'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

import Profile from '@/constants/main'

const { partners } = Profile

export default function Home () {
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
        <span className='text-white'>Code.</span>{' '}
        <span className='text-blue-500'>Create.</span>{' '}
        <span className='text-white'>Solve.</span>{' '}
        <span className='text-blue-700'>Build.</span>{' '}
        <span className='text-white'>Ship.</span>{' '}
        <span className='text-blue-600'>Repeat.</span>
      </motion.div>
      <motion.p 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className='text-xl max-w-3xl'
      >
        Dedicated software engineer specializing in building exceptional digital
        experiences. From concept to deployment, I combine technical expertise
        with creative problem-solving to deliver robust, user-centric
        applications that drive business success.
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className='flex gap-20 w-[120px] text-white'
      >
        <div className='flex flex-col'>
          <span className='text-7xl font-bold'>+8</span>
          <span className='text-2xl text-zinc-400'>Years of Experience</span>
        </div>
        <div className='flex flex-col'>
          <span className='text-7xl font-bold'>25</span>
          <span className='text-2xl text-zinc-400'>Projects Completed</span>
        </div>
        <div className='flex flex-col'>
          <span className='text-7xl font-bold'>10</span>
          <span className='text-2xl text-zinc-400'>Clients & Company</span>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <span className='text-xl'>Partnered with Leading Companies</span>
        <div className='flex gap-10 items-center'>
          {partners.map((company) => (
            <a key={company.alt} href={company.url} target='_blank' rel='noopener noreferrer'>
              <Image
                src={company.logo}
                width={company.width}
                height={company.height}
                alt={company.alt}
              />
            </a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
