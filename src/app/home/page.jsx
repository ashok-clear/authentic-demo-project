'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
   const navigate = useRouter()
    return (
    <div onClick={() => {
        navigate.push("/")
    }} className='mt-[30px] w-full h-screen bg-red-200'>page</div>
  )
}

export default page