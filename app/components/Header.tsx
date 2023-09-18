import Link from 'next/link'
import React from 'react'


const links = ["About", "Services", "Work", "Contact"]


export default function Header() {
  return (
    <div className="header-wrapper flex align-middle justify-between p-4 bg-slate-200 drop-shadow-md fixed top-0 left-0 right-0">
      <div className="left-nav">
        <div className="brand-name">
          <Link href="/">
            <h1 className='ml-8 font-bold text-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  '>Ibrahim</h1>
            </Link>
        </div>
      </div>
      <div className="right-nav">
        <ul className='flex align-center justify-start gap-6'>
          {
            links.map((link) => (
              <li className='list-none font-semibold hover:bg-blue-500 active:bg-blue-600 active:ring-black focus:outline-none focus:ring focus:ring-blue-700 p-1 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 '>
                <Link href={link.toLowerCase()}>{link}</Link>
              </li>
            ))
          }

        </ul>
      </div>
    </div>
  )
}
