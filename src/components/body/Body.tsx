'use client'
import React, { useState } from 'react'
import ThreadsHeader from './heading'

const Body = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all')
  
  return (
    <div>
      < ThreadsHeader activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
    </div>
  )
}

export default Body