import { useState } from 'react'

import {Hero, Mentorship, PublishedBooks, Skills, Contact} from './sections'
import './App.css'
import Nav from './components/Nav';

export default function App() {
  return (
    <>
      {/* header 
      hero
      mentorship
      skills
      published books
      contact */}
      <div className='flex flex-col min-h-[100dvh] bg-[#1a1a1a] text-white'>
        <Nav />
        <main className='flex-1'>
          <section>
            <Hero />
          </section>
          <section>
            <Mentorship />
          </section>
          <section>
            <Skills />
          </section>
          <section>
            <PublishedBooks />
          </section>
          <section>
            <Contact />
          </section>
        </main>
      </div>
    </>
  )
}