'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import getMenuItems from './menu-items'

export default function Navbar () {
  const pathname = usePathname()
  const menu = getMenuItems()

  const isMenuSelected = (link: string) => {
    return pathname === link
  }

  return (
    <nav className='flex py-2 px-4 bg-zinc-800 rounded-lg items-center gap-3'>
      {menu.map(m => {
        return (
          <Link
            href={m.link}
            className={`flex h-8 w-8 rounded-md px-2 justify-center items-center transition-all duration-300 ease-in-out hover:bg-zinc-700 ${
              isMenuSelected(m.link) ? 'bg-blue-600 font-bold' : ''
            }`}
            key={m.title}
          >
            <Image src={m.icon} alt={m.title} width={20} height={20} className="transition-transform duration-300 ease-in-out" />
          </Link>
        )
      })}
    </nav>
  )
}
