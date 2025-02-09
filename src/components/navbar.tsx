'use client'
import Image from 'next/image'
import { useState } from 'react'

const INITIAL_MENU = [
  {
    icon: 'https://img.icons8.com/?size=100&id=2797&format=png&color=F0F0F0',
    title: 'Home',
    link: '/',
    isSelected: true
  },
  {
    icon: 'https://img.icons8.com/?size=100&id=74359&format=png&color=F0F0F0',
    title: 'Projects',
    link: '/projects',
    isSelected: false
  },
  {
    icon: 'https://img.icons8.com/?size=100&id=35066&format=png&color=F0F0F0',
    title: 'Tools',
    link: '/tools',
    isSelected: false
  },
  {
    icon: 'https://img.icons8.com/?size=100&id=9489&format=png&color=F0F0F0',
    title: 'Experience',
    link: '/experience',
    isSelected: false
  },
  {
    icon: 'https://img.icons8.com/?size=100&id=63490&format=png&color=F0F0F0',
    title: 'Contact',
    link: '/contact',
    isSelected: false
  }
]

export default function Navbar () {
  const [menu, setMenu] = useState(INITIAL_MENU)
  const setSelectedMenu = (title: string) => {
    const updatedMenu = menu.map(m => ({
      ...m,
      isSelected: m.title === title
    }))
    setMenu(updatedMenu)
  }

  const isMenuSelected = (title: string) => {
    return menu.find(m => m.title === title)?.isSelected
  }

  return (
    <nav className='flex py-2 px-4 bg-zinc-800 rounded-lg items-center gap-3'>
      {menu.map(m => {
        return (
          <button
            className={`flex h-8 w-8 rounded-md px-2 justify-center items-center transition-all duration-300 ease-in-out hover:bg-zinc-700 ${
              isMenuSelected(m.title) ? 'bg-blue-600 font-bold' : ''
            }`}
            key={m.title}
            onClick={() => setSelectedMenu(m.title)}
          >
            <Image src={m.icon} alt={m.title} width={20} height={20} className="transition-transform duration-300 ease-in-out" />
          </button>
        )
      })}
    </nav>
  )
}
