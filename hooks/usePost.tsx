import { PostI } from '@/app/interface/postInterface'
import { PostContext } from '@/context/PostProvider'
import React, { useContext, useEffect, useState } from 'react'

interface Props {
  id?: string | undefined
} 

const usePost = (id?: string) => {
  
  const { listPost, setListPost } = useContext(PostContext)
  const [loading, setLoading] = useState(listPost.length === 0 ? true: false)
  const [ postData, setPostData ] = useState<PostI>()
  const [ commentsData, setCommentsData ] = useState<PostI[]>([])
  
 

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

  const selectPost = async (id: string) => {
    const url:string = `https://jsonplaceholder.typicode.com/posts/${id}`
    
    try {
      setLoading(true)
      const data = await fetch(url)
      const res = await data.json()
      setPostData!(res)

    } catch (error) {
      console.error(error)
    }finally {
      setLoading(false)
    }
    // try {
    //   const [postResponse ] = await Promise.all([
    //     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`),
    //     // fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`),
    //   ]);

    //   const postJson = await postResponse.json();
    //   // const commentsJson = await commentsResponse.json();
    //   // console.log(commentsJson)

    //   setPostData(postJson);
    //   // setCommentsData(commentsJson);
    // } catch (error) {
    //   console.error('Error fetching data:', error);
    // }
  }

  const commentsPost = async (id:string) => {
    const urlComments = `https://jsonplaceholder.typicode.com/posts/${id}/comments` 
    fetch(urlComments)
      .then((response) => {
        if(!response.ok){
          throw new Error('La solicitud no fue exitosa');
        }
        return response.json()
      })
      .then((data) => {
        setCommentsData(data)
        // console.log(data)
      })
      .catch((error) => {
        console.error('Error' ,error)
      })
  }


  // const selectPost =async (id:string) => {
  //   try {
  //     setLoading(true)
  //     const [ postResponse, commentsResponse ] = await Promise.all([
  //       fetch(`https://jsonplaceholder.typicode.com/posts/${id}`),
  //       fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments/`)
  //     ])

  //     const postJson = await postResponse.json()
  //     const commetsJson = await commentsResponse.json()

  //     setPostData!(postJson)
  //     setCommentsData!(commetsJson)

  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  useEffect(() => {
    if(loading){
      getPost()
    } 
    if(id){
      selectPost(id)
      commentsPost(id)
    }else {
      setLoading(false)
    }
  }, [])
  
  
  return {
    loading,
    listPost,
    setListPost,
    selectPost,
    postData,
    commentsData,
    setPostData
  }
}

export default usePost