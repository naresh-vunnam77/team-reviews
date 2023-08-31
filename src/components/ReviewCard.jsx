import React, { useState } from "react"
import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa"

import people from "../data"

const ReviewCard = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]
  const checkNum = (number) => {
    if (number > people.length - 1) {
      return 0
    }
    if (number < 0) {
      return people.length - 1
    }
    return number
  }
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1
      return checkNum(newIndex)
    })
  }
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return checkNum(newIndex)
    })
  }
  const randomPerson = () => {
    let randIndex = Math.floor(Math.random() * people.length)
    if (randIndex == index) {
      randIndex = index + 1
    }
    setIndex(checkNum(randIndex))
  }
  return (
    <article className="container flex flex-col bg-slate-200 text-black h-full m-2 shadow-sm shadow-white p-10 items-center justify-center w-[500px] rounded-md ">
      <h2 className="text-bold text-xl underline mb-5">Our Reviews</h2>
      <div className="bg-gray-900 w-40 h-40 shadow-xl ring-blue-900 ring-4 rounded-full m-2 overflow-hidden">
        <img src={image} alt="" className="object-cover w-full h-full" />
      </div>
      <h3 className="text-xl font-semibold ">{name}</h3>
      <span className="text-sm text-cyan-600 font-semibold">{job}</span>
      <p className="text-sm">
        <span>
          <FaQuoteLeft />
        </span>
        {text}
        <span>
          <FaQuoteRight />
        </span>
      </p>
      <div className="flex flex-row">
        <button
          className="m-2 p-2 bg-blue-100 text-blue-900 rounded-xl "
          onClick={prevPerson}
        >
          <FaChevronLeft />
        </button>
        <button
          className="m-2 p-2 bg-blue-100 text-blue-900 rounded-xl "
          onClick={nextPerson}
        >
          <FaChevronRight />
        </button>
      </div>
      <button
        className="bg-gray-900 text-white fond-bold text-center rounded-md shadow-md p-3 w-full mx-20"
        onClick={randomPerson}
      >
        Surprise me
      </button>
    </article>
  )
}

export default ReviewCard
