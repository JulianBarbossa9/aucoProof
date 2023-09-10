import React from 'react'
import { PostI } from '../interface/postInterface'
import Link from 'next/link'




const Post = ( {body, id, title, userId}: PostI) => {
  return (
    <Link href={`/${id}`} className=''>
      <div className='max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-2'>
        <div className='flex justify-center md:justify-end -mt-16'>
          <div className='w-20 h-20 bg-indigo-500 rounded-full '><h4 className='mt-7 ml-8 font-extrabold text-2xl'>{userId}</h4></div>
        </div>
        <div className=''>
          <h2 className='text-gray-800 text-2xl font-semibold uppercase'>{title}</h2>
          <p className='m-2 text-gray-600'>{body}</p>
        </div>
      </div>
    </Link>
  )
}

export default Post