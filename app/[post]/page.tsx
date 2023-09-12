"use client";

import Link from "next/link";
import usePost from "@/hooks/usePost";
import { HashLoader } from "react-spinners";

const PostDetail = ({ params }: any) => {
  const { post } = params;
  const { commentsData, postData, loading } = usePost(post);

  return (
    <>
      <div className="flex flex-col justify-center align-middle sm:mx-20">
        {loading ? (
          <div className="flex items-center justify-center h-screen">
            <HashLoader loading color="#818CF8" size={80} />
          </div>
        ) : (
          <>
            <Link
              href={"/"}
              className="bg-indigo-500 hover:bg-indigo-400  px-4 py-3 rounded w-20 mt-20 "
            >
              Home
            </Link>

            <div className=" w-50  py-4 px-8 bg-white shadow-lg rounded-lg my-2 mt-10">
              <div className="p-10">
                <h2 className="text-gray-800 text-3xl font-semibold uppercase mb-5">
                  {postData?.title}
                </h2>
                <hr />
                <p className="text-black mt-5 normal-case">{postData?.body}</p>
              </div>
            </div>
            <div className=" antialiased mx-auto max-w-screen-sm">
              <h3 className="mt-8 text-2xl font-semibold text-white">
                Comments
              </h3>
              <div className=" space-y-4">
                <div className="flex flex-col ">
                  {commentsData.map((item: any) => (
                    <div className=" flex-shrink-0 mt-5 " key={item.id}>
                      <div className="my-2  rounded-full w-8 h-8 sm:w-10 sm:h-10 bg-indigo-500">
                        <p className="text-white font-extrabold text-center p-2">
                          {item.email.substring(0, 1)}
                        </p>
                      </div>
                      <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                        <strong>{item.email}</strong>
                        <p className="text-sm">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default PostDetail;
