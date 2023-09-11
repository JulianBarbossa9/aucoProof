import { PostContext } from '@/context/PostProvider'
import React, { useContext, useEffect, useState } from 'react'

const usePost = () => {
  
  const { listPost, setListPost } = useContext(PostContext)
  const [loading, setLoading] = useState(listPost.length === 0 ? true: false)

  const getPost = async () => {
    const url:string = 'https://jsonplaceholder.typicode.com/posts'
    
    try {
      setLoading(true)
      const data = await fetch(url)
      const res = await data.json()
      setListPost!(res)

    } catch (error) {
      console.error(error)
    }finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if(loading){
      getPost()
    } else {
      setLoading(false)
    }
  }, [])
  
  
  return {
    loading,
    listPost,
    setListPost
  }
}

export default usePost