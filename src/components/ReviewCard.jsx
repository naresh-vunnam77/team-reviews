import React from "react"
import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa"

const ReviewCard = () => {
  return (
    <article className="container flex flex-col bg-slate-200 text-black h-full m-5 shadow-sm shadow-white p-10 items-center justify-center w-[500px] rounded-md ">
      <div className="bg-gray-900 w-40 h-40 shadow-xl ring-blue-900 ring-4 rounded-full m-2"></div>
      <h3 className="text-xl font-semibold ">Title</h3>
      <span className="text-sm text-cyan-600 font-semibold">Role</span>
      <span>
        <span>
          <FaQuoteLeft />
        </span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
        pariatur. Corrupti, sit sed. Optio iure sequi repellendus ullam iste,
        dolore velit, et nulla eum impedit rem nemo reprehenderit? Porro, saepe?
        <span>
          <FaQuoteRight />
        </span>
      </span>
      <div className="flex flex-row">
        <button className="m-2 p-2 bg-blue-100 text-blue-900 rounded-xl ">
          <FaChevronLeft />
        </button>
        <button className="m-2 p-2 bg-blue-100 text-blue-900 rounded-xl ">
          <FaChevronRight />
        </button>
      </div>
      <button className="bg-gray-900 text-white fond-bold text-center rounded-md shadow-md p-3 w-full mx-20">
        Surprise me
      </button>
    </article>
  )
}

export default ReviewCard
