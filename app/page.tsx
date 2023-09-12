"use client";

import Post from "./components/Post";
import { PostI } from "./interface/postInterface";
import Link from "next/link";
import { PostContext } from "@/context/PostProvider";
import usePost from "@/hooks/usePost";
import PaginationControls from "./components/PaginationControls";
import { HashLoader } from "react-spinners";

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { listPost, loading } = usePost();

  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "5";

  const start = (Number(page) - 1) * Number(per_page); // 0, 5, 10 ...
  const end = start + Number(per_page); // 5, 10, 15 ...

  const entries = listPost.slice(start, end);


  return (
    <main className="flex flex-col justify-center align-middle ">
      <div className="mt-10">
        <h1 className=" text-center text-7xl capitalize font-extrabold mb-5">
          List of Post
        </h1>
        <hr />
        <div className="mt-5 mx-0 md:mx-0 sm:mx-10 flex justify-between">
          <Link
            href={"/about"}
            className="text-3xl  bold hover:underline  
              hover:extrabold
              inline-block 
              hover:duration-300 
              cursor-pointer"
          >
            About Me
          </Link>
          <PaginationControls
            hasNextPage={end < listPost.length}
            hasPrevPage={start > 0}
          />
        </div>
      </div>

      {
        loading ? (
          <div className="flex items-center justify-center h-screen">
            <HashLoader loading color="#818CF8" size={80} />
          </div>
        ) : 
        <>
          <div className="grid gap-16 grid-cols-fluid mt-20 ">
            {entries.map((data: PostI) => (
              <Post
                userId={data.userId}
                id={data.id}
                title={data.title}
                body={data.body}
                key={data.id}
              />
            ))}
          </div>
        </>
      }
    </main>
  );
}
