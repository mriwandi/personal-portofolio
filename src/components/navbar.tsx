'use client'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import constants from '@/constants/main'

const INITIAL_MENU = constants.menus

export default function Navbar () {
  const router = useRouter()
  const pathname = usePathname()
  const [menu, setMenu] = useState(INITIAL_MENU)

  useEffect(() => {
    const updatedMenu = menu.map(m => ({
      ...m,
      isSelected: m.link === pathname
    }))
    setMenu(updatedMenu)
  }, [pathname])

  const setSelectedMenu = (link: string) => {
    router.push(link)
  }

  const isMenuSelected = (link: string) => {
    return pathname === link
  }

  return (
    <nav className='flex py-2 px-4 bg-zinc-800 rounded-lg items-center gap-3'>
      {menu.map(m => {
        return (
          <button
            className={`flex h-8 w-8 rounded-md px-2 justify-center items-center transition-all duration-300 ease-in-out hover:bg-zinc-700 ${
              isMenuSelected(m.link) ? 'bg-blue-600 font-bold' : ''
            }`}
            key={m.title}
            onClick={() => setSelectedMenu(m.link)}
          >
            <Image src={m.icon} alt={m.title} width={20} height={20} className="transition-transform duration-300 ease-in-out" />
          </button>
        )
      })}
    </nav>
  )
}
