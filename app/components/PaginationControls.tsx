"use client";

import { useRouter } from "next/navigation";
import React, { FC } from "react";
import { useSearchParams } from "next/navigation";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

interface PaginationControlsProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

const PaginationControls: FC<PaginationControlsProps> = ({
  hasNextPage,
  hasPrevPage,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "5";


  return (
    <div className="flex gap-2">
      <button
        className=" text-white p-1 hover:text-indigo-500"
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/?page=${Number(page) - 1}&per_page=${per_page}`);
        }}
      >
        <AiOutlineArrowLeft 
          className='h-8 w-8'
        />
      </button>

      <div className="mt-2">
        {page} / 20
      </div>

      <button
        className=" text-white hover:text-indigo-500 p-1"
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/?page=${Number(page) + 1}&per_page=${per_page}`);
        }}
      >
        <AiOutlineArrowRight 
          className='h-8 w-8'
        />
      </button>
    </div>
  );
};

export default PaginationControls;
