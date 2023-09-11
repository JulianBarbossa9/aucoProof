import Link from 'next/link'
import React from 'react'

const PostDetail = async ({ params } : any) => {

  const { post } = params

  console.log({post})
  // console.log({params})

  const url:string = `https://jsonplaceholder.typicode.com/posts/${post}`

  try {
    const data = await fetch(url)
    const response = await data.json()
    // ?page=2&per_page=5

    return (
      <>
      <div className="m-32 ">
        {/* <button className='bg-sky-500 px-4 py-3 rounded'> */}
          <Link href={'/'} className='bg-indigo-500 hover:bg-indigo-400  px-4 py-3 rounded '>
            Home
          </Link>
        {/* </button> */}
          <div className=' w-50  py-4 px-8 bg-white shadow-lg rounded-lg my-2 mt-10'>
            <div className='p-10'>
              <h2 className='text-gray-800 text-3xl font-semibold uppercase mb-5'>{ response.title}</h2>
              <hr />
              <p className='text-black mt-5 normal-case'>{response.body}</p>
              {/* todo: bringht the comments https://jsonplaceholder.typicode.com/posts/1/comments*/}
            </div>
          </div>
      </div>
      
      </>
    )
  } catch (error) {
    
  }
  return (
    <div>PostDetail</div>
  )
}

export default PostDetail