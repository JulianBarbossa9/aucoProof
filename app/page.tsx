import Image from 'next/image'
import Post from './components/Post'
import { PostI } from './interface/postInterface'
import Link from 'next/link'



export default async function Home() {

  const url:string = 'https://jsonplaceholder.typicode.com/posts'
  const data = await fetch(url)
  const res = await data.json()
  // console.log(res)

  return (
    <main className='flex flex-col justify-center align-middle'>
      <div className='mt-10'>
        <h1 className=' text-center text-7xl capitalize  font-extrabold mb-5'>List of Post</h1>
        <hr />
        <div className='mt-5'>
          <Link href={'/'} className='text-4xl bold hover:underline  
              hover:extrabold
              inline-block 
              hover:duration-300 
              cursor-pointer'>
            Home
          </Link>
        </div>
      </div>
        <div className='grid gap-16 grid-cols-fluid mt-20'>
        {
          res.map((data: PostI) => (
            <Post 
              userId= {data.userId}
              id= {data.id}
              title= {data.title}
              body= {data.body}
            />
          ))
        }
      </div>
    </main>
  )
}
