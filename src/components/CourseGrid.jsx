import React from "react";
import { useNavigate } from "react-router-dom";

const CourseGrid = ({ title, courses }) => {
  const navigate = useNavigate()

  return (
    <section className="py-10 sm:py-16 px-5">
      <h2 className="font-amstel text-2xl sm:text-3xl md:text-4xl text-[#1F596B] text-center mb-8 sm:mb-12">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-sm sm:max-w-2xl lg:max-w-6xl mx-auto">
        {courses.map((course, index) => (
          <div
            key={index}
            className="relative rounded-tl-3xl rounded-br-3xl overflow-hidden shadow-lg group cursor-pointer"
            onClick={() => navigate(`/enrollment?course=${encodeURIComponent(course.name)}`)}
          >
            <img
              src={course.image}
              alt={course.name}
              className="w-full h-56 sm:h-64 lg:h-72 object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition duration-300" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 transition-opacity duration-300 group-hover:opacity-0">
              <h3 className="font-amstel text-base sm:text-lg lg:text-xl text-white">
                {course.name}
              </h3>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="font-amstel text-base sm:text-lg lg:text-xl text-white text-center mb-2 sm:mb-3">
                {course.name}
              </h3>
              <p className="font-dm text-xs sm:text-sm text-gray-200 text-center leading-relaxed">
                {course.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CourseGrid;