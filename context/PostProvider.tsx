"use client"

import { PostI } from "@/app/interface/postInterface"
import { ReactNode, createContext, useState } from "react"


type Props = {
  children: ReactNode
}

export interface PostContextI {
  listPost: PostI[]
  setListPost?: (post: PostI[]) => void
}

export const PostContext = createContext<PostContextI>({ listPost:[]})

export default function PostProvider({ children }: Props ) {

  const [ listPost, setListPost ] = useState<PostI[]>([])

  return (
    <PostContext.Provider 
      value={{
        listPost,
        setListPost,
      }}>
        {children}
      </PostContext.Provider>
  )

}