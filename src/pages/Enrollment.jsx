import React, { useState } from 'react'
import HeroImage from '../images/Image3.jpg'

const adultCourses = [
  'Madani Qaida / Quranic Qaida with Tajweed',
  'Quran Recitation',
  'Quran with Tajweed and Tarteel',
  'Quran Memorization',
  'Tafseer e Quran',
  'Islamic Beliefs and Practices',
  'Fiqh (Islamic Jurisprudence)',
  'Salaat and Dua',
  'Basic Arabic',
]

const kidsCourses = [
  'Qaida for Beginners',
  'Quran Reading for Beginners',
  'Quran Memorization',
  'Islam for Kids',
  'Basic Fiqh Learning',
  '40 Hadiths',
  'Siratun Nabi (P.B.U.H)',
  'Tarbiyah',
]

const plans = [
  'Plan A - 2 Days/Week - £28/month',
  'Plan B - 3 Days/Week - £40/month',
  'Plan C - 4 Days/Week - £54/month',
  'Plan D - 5 Days/Week - £68/month',
  'Plan E - 6 Days/Week - £80/month',
]

const Enrollment = () => {
  const [category, setCategory] = useState('')

  const courses = category === 'adult' ? adultCourses : category === 'kids' ? kidsCourses : []

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[350px] sm:h-[450px] md:h-[600px] bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex items-center justify-center h-full px-5">
          <h1 className="font-amstel text-3xl sm:text-5xl md:text-6xl text-white text-center font-light">
            Enroll Now
          </h1>
        </div>
      </section>

      {/* Enrollment Form */}
      <section className="py-16 sm:py-24 px-6 sm:px-5">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-amstel text-2xl sm:text-3xl md:text-4xl text-[#1F596B] text-center mb-3">
            Begin Your Journey
          </h2>
          <p className="font-dm text-sm sm:text-base text-gray-500 text-center mb-10">
            Fill in the details below and we'll get you started on your Quranic learning path.
          </p>

          <div className="space-y-5">
            {/* Name & Email row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="font-dm text-sm text-gray-700 block mb-1.5">Full Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full font-dm text-sm px-4 py-3 border border-gray-300 rounded-tl-xl rounded-br-xl focus:outline-none focus:border-[#1F596B] transition duration-200 bg-white"
                />
              </div>
              <div>
                <label className="font-dm text-sm text-gray-700 block mb-1.5">Email</label>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full font-dm text-sm px-4 py-3 border border-gray-300 rounded-tl-xl rounded-br-xl focus:outline-none focus:border-[#1F596B] transition duration-200 bg-white"
                />
              </div>
            </div>

            {/* Phone & Age row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="font-dm text-sm text-gray-700 block mb-1.5">Phone</label>
                <input
                  type="tel"
                  placeholder="Your phone number"
                  className="w-full font-dm text-sm px-4 py-3 border border-gray-300 rounded-tl-xl rounded-br-xl focus:outline-none focus:border-[#1F596B] transition duration-200 bg-white"
                />
              </div>
              <div>
                <label className="font-dm text-sm text-gray-700 block mb-1.5">Age</label>
                <input
                  type="number"
                  placeholder="Your age"
                  className="w-full font-dm text-sm px-4 py-3 border border-gray-300 rounded-tl-xl rounded-br-xl focus:outline-none focus:border-[#1F596B] transition duration-200 bg-white"
                />
              </div>
            </div>

            {/* Country */}
            <div>
              <label className="font-dm text-sm text-gray-700 block mb-1.5">Country</label>
              <input
                type="text"
                placeholder="Your country"
                className="w-full font-dm text-sm px-4 py-3 border border-gray-300 rounded-tl-xl rounded-br-xl focus:outline-none focus:border-[#1F596B] transition duration-200 bg-white"
              />
            </div>

            {/* Category & Course row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="font-dm text-sm text-gray-700 block mb-1.5">Course Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full font-dm text-sm px-4 py-3 border border-gray-300 rounded-tl-xl rounded-br-xl focus:outline-none focus:border-[#1F596B] transition duration-200 bg-white appearance-none"
                >
                  <option value="">Select category</option>
                  <option value="adult">Adult Courses</option>
                  <option value="kids">Kids Courses</option>
                </select>
              </div>
              <div>
                <label className="font-dm text-sm text-gray-700 block mb-1.5">Course</label>
                <select
                  disabled={!category}
                  className="w-full font-dm text-sm px-4 py-3 border border-gray-300 rounded-tl-xl rounded-br-xl focus:outline-none focus:border-[#1F596B] transition duration-200 bg-white appearance-none disabled:opacity-50"
                >
                  <option value="">Select a course</option>
                  {courses.map((course, i) => (
                    <option key={i} value={course}>{course}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Plan */}
            <div>
              <label className="font-dm text-sm text-gray-700 block mb-1.5">Plan</label>
              <select
                className="w-full font-dm text-sm px-4 py-3 border border-gray-300 rounded-tl-xl rounded-br-xl focus:outline-none focus:border-[#1F596B] transition duration-200 bg-white appearance-none"
              >
                <option value="">Select a plan</option>
                {plans.map((plan, i) => (
                  <option key={i} value={plan}>{plan}</option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="font-dm text-sm text-gray-700 block mb-1.5">Message / Notes</label>
              <textarea
                rows={4}
                placeholder="Any additional notes or questions?"
                className="w-full font-dm text-sm px-4 py-3 border border-gray-300 rounded-tl-xl rounded-br-xl focus:outline-none focus:border-[#1F596B] transition duration-200 bg-white resize-none"
              />
            </div>

            {/* Submit */}
            <button className="w-full font-dm bg-[#1F596B] hover:bg-[#174a5a] text-white py-3 rounded-tl-xl rounded-br-xl transition duration-200 text-base font-medium">
              Submit Enrollment
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Enrollment