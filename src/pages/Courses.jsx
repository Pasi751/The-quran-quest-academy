import React from 'react'
import HeroImage from '../images/Image3.jpg'

import AdultCourse1 from '../images/Course1.jpg'
import AdultCourse2 from '../images/Course2.jpg'
import AdultCourse3 from '../images/Course3.jpg'
import AdultCourse4 from '../images/Course4.jpg'
import AdultCourse5 from '../images/Course5.jpg'
import AdultCourse6 from '../images/Course6.jpg'
import AdultCourse7 from '../images/Course7.jpg'
import AdultCourse8 from '../images/Course8.jpg'
import AdultCourse9 from '../images/Course9.jpg'

import KidsCourse1 from '../images/Course10.jpg'
import KidsCourse2 from '../images/Course11.jpg'
import KidsCourse3 from '../images/Course12.jpg'
import KidsCourse4 from '../images/Course14.jpg'
import KidsCourse5 from '../images/Course15.jpg'
import KidsCourse6 from '../images/Course16.jpg'
import KidsCourse7 from '../images/Course17.jpg'
import KidsCourse8 from '../images/Course18.jpg'

import { Link } from 'react-router-dom'

const adultCourses = [
  { name: 'Madani Qaida / Quranic Qaida with Tajweed', image: AdultCourse1, description: 'The "Qaida for Beginners" course is designed exclusively for individuals who aspire to learn how to read the Quran with proficiency and fluency.' },
  { name: 'Quran Recitation', image: AdultCourse2, description: 'The "Quran Recitation" course is meticulously designed for individuals who aspire to read the Quran with precision, accuracy, and fluency, all while following the revered rules of Tajweed.' },
  { name: 'Quran with Tajweed and Tarteel', image: AdultCourse3, description: 'The "Tajweed and Tarteel" course enhances Quranic recitation for those who\'ve read Quran and Qaida, focusing on confidence, fluency, and melodious tone through Tajweed principles.' },
  { name: 'Quran Memorization', image: AdultCourse4, description: 'The "Quran Memorization (Hifz)" is designed for individuals who aspire to commit the entire Quran to memory, a noble endeavor in the path of Islam.' },
  { name: 'Tafseer e Quran', image: AdultCourse5, description: 'The "Tafsir of the Quran" course is designed for individuals who seek to deepen their understanding of the Quran by exploring its interpretation and commentary.' },
  { name: 'Islamic Beliefs and Practices', image: AdultCourse6, description: 'A free online course for new Muslims to learn the basics of Islam, understand daily practices, and build confidence in their faith journey with support and guidance.' },
  { name: 'Fiqh (Islamic Jurisprudence)', image: AdultCourse7, description: 'Fiqh Learning provides a foundational understanding of Islamic jurisprudence, covering daily life rules, including prayer, fasting, and transactions, ensuring Islamic guideline adherence.' },
  { name: 'Salaat and Dua', image: AdultCourse8, description: 'This course teaches daily prayer (Salat) and personal supplication (Dua) in Islam, helping students connect with Allah through these acts of worship.' },
  { name: 'Basic Arabic', image: AdultCourse9, description: 'A foundational course designed to help students learn Arabic from the beginning, with a special focus on Qur\'anic Arabic, improving pronunciation and basic grammar.' },
]

const kidsCourses = [
  { name: 'Qaida for Beginners', image: KidsCourse1, description: 'This course is perfect for those who are new to Quranic studies and want to learn Quran Reading.' },
  { name: 'Quran Reading for Beginners', image: KidsCourse2, description: 'Designed to help students read the Quran fluently following Tajweed rules and regulations, with an emphasis on proper pronunciation and rhythm.' },
  { name: 'Quran Memorization', image: KidsCourse3, description: 'Made for those who wish to commit the Quran to memory, this course offers structured memorization plans and techniques.' },
  { name: 'Islam for Kids', image: KidsCourse4, description: 'An engaging introduction to the fundamentals of Islam, designed for young learners.' },
  { name: 'Basic Fiqh Learning', image: KidsCourse5, description: 'Students will learn about all the Islamic Rituals (Pillars of Islam) and related problems.' },
  { name: '40 Hadiths', image: KidsCourse6, description: 'A simplified collection of Hadiths that are essential for the moral development and easy for children to understand.' },
  { name: 'Siratun Nabi (P.B.U.H)', image: KidsCourse7, description: 'This course covers the life and teachings of the Prophet Muhammad (PBUH), providing valuable lessons and inspiration.' },
  { name: 'Tarbiyah', image: KidsCourse8, description: 'Aimed at cultivating the moral and ethical values in children, this course provides a strong foundation in Islamic teachings.' },
]

const BentoCard = ({ course, className = '' }) => {
  const [active, setActive] = React.useState(false)

  return (
    <div
      className={`relative overflow-hidden group cursor-pointer ${className}`}
      onClick={() => setActive(!active)}
    >
      <img
        src={course.image}
        alt={course.name}
        className={`w-full h-full object-cover transition-transform duration-500 ease-out ${active ? 'scale-110' : ''} group-hover:scale-110`}
      />
      <div className={`absolute inset-0 transition duration-500 ${active ? 'bg-gradient-to-t from-black/80 via-black/50 to-transparent' : 'bg-gradient-to-t from-black/70 via-black/20 to-transparent'} group-hover:from-black/80 group-hover:via-black/50`} />

      <div className={`absolute bottom-0 left-0 right-0 p-3 sm:p-3 transition-all duration-400 ${active ? 'opacity-0 translate-y-2' : ''} group-hover:opacity-0 group-hover:translate-y-2`}>
        <h3 className="font-amstel text-lg sm:text-base lg:text-lg text-white drop-shadow-md line-clamp-2">
          {course.name}
        </h3>
      </div>

      <div className={`absolute inset-0 flex flex-col justify-end p-3 sm:p-3 transition-all duration-400 overflow-y-auto ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} group-hover:opacity-100 group-hover:translate-y-0`}>
        <h3 className="font-amstel text-base sm:text-xs lg:text-sm text-white mb-1 drop-shadow-md">
          {course.name}
        </h3>
        <p className="font-dm text-sm sm:text-[10px] lg:text-xs text-gray-200 leading-snug">
          {course.description}
        </p>
      </div>
    </div>
  )
}

const AdultBentoGrid = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3 w-full max-w-[500px] sm:max-w-[600px] lg:max-w-[700px] aspect-auto lg:aspect-square gap-3 lg:gap-1.5 mx-auto">
    <BentoCard course={adultCourses[0]} className="h-[200px] sm:h-auto sm:col-span-2 lg:col-span-2 rounded-tl-2xl rounded-br-2xl" />
    <BentoCard course={adultCourses[1]} className="h-[200px] sm:h-auto rounded-tl-xl rounded-br-xl" />
    <BentoCard course={adultCourses[2]} className="h-[200px] sm:h-auto rounded-tl-xl rounded-br-xl" />
    <BentoCard course={adultCourses[3]} className="h-[200px] sm:h-auto rounded-tl-xl rounded-br-xl" />
    <BentoCard course={adultCourses[4]} className="h-[200px] sm:h-auto sm:col-span-2 lg:col-span-2 rounded-tl-2xl rounded-br-2xl" />
    <BentoCard course={adultCourses[5]} className="h-[200px] sm:h-auto rounded-tl-xl rounded-br-xl" />
    <BentoCard course={adultCourses[6]} className="h-[200px] sm:h-auto rounded-tl-xl rounded-br-xl" />
    <BentoCard course={adultCourses[7]} className="h-[200px] sm:h-auto rounded-tl-xl rounded-br-xl" />
    <BentoCard course={adultCourses[8]} className="h-[200px] sm:h-auto sm:col-span-2 lg:col-span-2 rounded-tl-2xl rounded-br-2xl" />
  </div>
)

const KidsBentoGrid = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 w-full max-w-[500px] sm:max-w-[600px] lg:max-w-[700px] aspect-auto lg:aspect-square gap-3 lg:gap-1.5 mx-auto">
    <BentoCard course={kidsCourses[0]} className="h-[200px] sm:h-auto lg:row-span-2 rounded-tl-2xl rounded-br-2xl" />
    <BentoCard course={kidsCourses[1]} className="h-[200px] sm:h-auto rounded-tl-xl rounded-br-xl" />
    <BentoCard course={kidsCourses[2]} className="h-[200px] sm:h-auto rounded-tl-xl rounded-br-xl" />
    <BentoCard course={kidsCourses[3]} className="h-[200px] sm:h-auto rounded-tl-xl rounded-br-xl" />
    <BentoCard course={kidsCourses[4]} className="h-[200px] sm:h-auto rounded-tl-xl rounded-br-xl" />
    <BentoCard course={kidsCourses[5]} className="h-[200px] sm:h-auto rounded-tl-xl rounded-br-xl" />
    <BentoCard course={kidsCourses[6]} className="h-[200px] sm:h-auto rounded-tl-xl rounded-br-xl" />
    <BentoCard course={kidsCourses[7]} className="h-[200px] sm:h-auto rounded-tl-xl rounded-br-xl" />
  </div>
)

const Courses = () => {
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
            Our Courses
          </h1>
        </div>
      </section>

      {/* Adult Courses */}
      <section className="py-10 sm:py-16 px-6 sm:px-5 mt-12">
        <h2 className="font-amstel text-2xl sm:text-3xl md:text-4xl text-[#1F596B] text-center mb-8 sm:mb-12">
          Courses Designed for Adults
        </h2>
        <AdultBentoGrid />
      </section>

      {/* Kids Courses */}
      <section className="py-10 sm:py-16 px-6 sm:px-5">
        <h2 className="font-amstel text-2xl sm:text-3xl md:text-4xl text-[#1F596B] text-center mb-8 sm:mb-12">
          Courses Designed for Kids
        </h2>
        <KidsBentoGrid />
      </section>

      {/* Enroll Quote */}
      <section className="py-16 sm:py-24 px-5">
        <p className="font-amstel text-xl sm:text-2xl md:text-3xl text-[#1F596B] text-center max-w-3xl mx-auto leading-relaxed">
          Take the first step toward understanding,
          reflection, and spiritual growth —{' '}
          <Link
            to="/enrollment"
            className="underline font-medium hover:text-[#174a5a] transition duration-200"
          >
            Enroll Now
          </Link>
        </p>
      </section>
    </div>
  )
}

export default Courses