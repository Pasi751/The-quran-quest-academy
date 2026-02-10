import React, { useEffect, useRef } from 'react'
import Image1 from '../images/Image1.png'
import Image2 from '../images/Image2.png'
import Image3 from '../images/Image3.jpg'
import Course1 from '../images/Course1.jpg'
import Course2 from '../images/Course2.jpg'
import Course3 from '../images/Course3.jpg'
import Course4 from '../images/Course4.jpg'
import Course5 from '../images/Course10.jpg'
import Course6 from '../images/Course11.jpg'
import Course7 from '../images/Course12.jpg'
import Course8 from '../images/Course13.jpg'
import CourseSlider from '../components/CourseGrid'
import CourseGrid from '../components/CourseGrid'
import Icon1 from '../images/icon1.png'
import Icon2 from '../images/icon2.png'
import Icon3 from '../images/icon3.png'
import Icon4 from '../images/icon4.png'
import Icon5 from '../images/icon5.png'


const adultCourses = [
  { name: 'Madani Qaida/ Quranic qaida', image: Course1, description: 'The "Qaida for Beginners" course is designed exclusively for individuals who aspire to learn how to read the Quran with proficiency and fluency.' },
  { name: 'Quran with Tajweed and Tarteel', image: Course2, description: 'The "Tajweed and Tarteel" course enhances Quranic recitation for those who have read Quran and Qaida, focusing on confidence, fluency, and melodious tone through Tajweed principles.' },
  { name: 'Quran memorization', image: Course3, description: 'The "Quran Memorization (Hifz)" is designed for individuals who aspire to commit the entire Quran to memory, a noble endeavor in the path of Islam.' },
  { name: 'Tafseer e Quran.( Deep understanding of the Quran)', image: Course4, description: 'The "Tafsir of the Quran" course is designed for individuals who seek to deepen their understanding of the Quran by exploring its interpretation and commentary' },
]

const kidsCourses = [
  { name: 'Qaida for Beginners', image: Course5, description: 'This course is perfect for those who are new to Quranic studies and want to learn Quran Reading.' },
  { name: 'Quran reading For beginners', image: Course6, description: 'Designed to help students read the Quran fluently following Tajweed rules and regulations, with an emphasis on proper pronunciation and rhythm.' },
  { name: 'Quran memorization', image: Course7, description: 'Made for those who wish to commit the Quran to memory, this course offers structured memorization plans and techniques.' },
  { name: 'Quran with Tajweed & Tarteel', image: Course8, description: 'Teach your children the fundamentals of Islam through interactive and age-appropriate lessons.' },
]

const principles = [
  { name: 'Kids Friendly', icon: Icon1 },
  { name: 'Multilingual', icon: Icon2 },
  { name: 'Caring Teachers', icon: Icon3 },
  { name: 'Safe Learning', icon: Icon4 },
  { name: '24/7 Scheduling', icon: Icon5 },
]

const feedbacks = [
  {
    name: 'Fatima Ahmed',
    city: 'London, UK',
    rating: 5,
    review: 'The teachers are incredibly patient and understanding. My children have developed a strong connection with the Quran thanks to this academy.',
  },
  {
    name: 'Omar Hassan',
    city: 'Toronto, Canada',
    rating: 5,
    review: 'As a revert, I was nervous to start learning. The supportive environment here made all the difference. I feel truly welcomed and guided.',
  },
  {
    name: 'Aisha Rahman',
    city: 'Sydney, Australia',
    rating: 4,
    review: 'The Tajweed course transformed my recitation. The structured approach and personal attention helped me improve beyond my expectations.',
  },
  {
    name: 'Yusuf Khan',
    city: 'Dubai, UAE',
    rating: 5,
    review: 'My son has been taking Hifz classes and his progress has been remarkable. The teachers truly care about each student\'s journey.',
  },
]



const FadeInSection = ({ children, className = '' }) => {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0')
          entry.target.classList.remove('opacity-0', 'translate-y-8')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`opacity-0 translate-y-8 transition-all duration-700 ease-out ${className}`}
    >
      {children}
    </div>
  )
}

const Homepage = () => {
  return (
    <div>
      <section
        className="relative h-[600px] bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=1920&q=80')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex items-center h-full px-6 sm:px-12">
          <div className="max-w-xl">
            <h1 className="font-amstel text-5xl sm:text-6xl font-light text-white leading-tight">
              Connecting Hearts to the Quran
            </h1>
            <p className="font-dm mt-4 text-lg text-gray-200">
              Helping you learn, understand, and connect with the Quran.
            </p>
            <a href="#"
              className="font-dm inline-block mt-6 px-8 py-3 bg-[#1F596B] hover:bg-[#174a5a] text-white font-semibold rounded-tl-3xl rounded-br-3xl transition duration-200"
            >
              START YOUR JOURNEY
            </a>
          </div>
        </div>
      </section>

      <h1 className="font-amstel text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#1F596B] mx-auto text-center max-w-2xl my-16 sm:my-20 md:my-30 leading-tight px-5">
        Step into the Quran,
        let your journey begin with
        The Quran Quest.
      </h1>

      <FadeInSection>
        <section className="flex flex-col md:flex-row items-center max-w-7xl mx-auto mt-16 md:mt-30 md:px-32 py-6 md:py-12 px-5">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={Image1}
              alt="Quran study"
              className="w-[70%] sm:w-[60%] md:w-[80%] h-auto rounded-tl-4xl rounded-br-4xl shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2 mt-6 md:mt-0 flex flex-col items-center md:items-start text-center md:text-left md:pl-18">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-amstel text-[#1F596B] max-w-xs mb-4">
              Reflect From the Heart and Strengthen Your Faith
            </h2>
            <p className="font-dm font-light text-sm sm:text-base">
              Every moment spent learning the Quran is a step toward personal and spiritual growth.
              Through consistent study and reflection, you can develop a stronger sense of purpose,
              deepen your faith, and carry the guidance of the Quran into your daily life.
            </p>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="flex flex-col md:flex-row-reverse items-center max-w-7xl mx-auto md:px-32 py-6 md:py-12 px-5 mt-16 md:mt-30">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={Image2}
              alt="Learning"
              className="w-[70%] sm:w-[60%] md:w-[80%] h-auto rounded-tl-4xl rounded-br-4xl shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2 mt-6 md:mt-0 flex flex-col items-center md:items-start text-center md:text-left md:pr-32">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-amstel text-[#1F596B] max-w-xs mb-4">
              Walk Your Learning Path With Gentle Guidance
            </h2>
            <p className="font-dm font-light text-sm sm:text-base">
              No matter where you begin, this journey is supported with guidance that meets
              you at your level. The learning experience is designed to be encouraging and
              steady, helping you progress with confidence while feeling supported at every
              step along the way.
            </p>
          </div>
        </section>
      </FadeInSection>
      {/* About Section */}
      <section className='mt-30'>
        {/* Image with overlay and title */}
        <div className="relative w-full h-[400px] sm:h-[500px] bg-cover bg-center"
          style={{ backgroundImage: `url(${Image3})` }}
        >
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 flex items-center justify-center h-full">
            <h2 className="font-amstel text-4xl sm:text-5xl md:text-6xl text-white text-center px-4">
              The Quran Quest Academy
            </h2>
          </div>
        </div>

        {/* Paragraph */}
        <div className="px-6 sm:px-12 md:px-24 lg:px-48 py-16">
          <p className="font-dm font-light text-sm sm:text-base text-center leading-relaxed">
            The Quran Quest is an online Islamic learning institute dedicated to making Qur'anic education accessible, meaningful, and
            transformative for students around the world. Our mission is to help learners of all ages connect deeply with the Book of Allah ﷻ
            through correct recitation, understanding, and practical application in daily life. Founded with a vision to bridge traditional Islamic
            knowledge with modern online learning, The Quran Quest provides structured and student-centered courses for kids, teens,
            adults, and revert Muslims. We offer Quran reading with Tajweed, Tafseer, Hifz support, Islamic studies, and spiritual development
            programs in a nurturing, inclusive, and engaging environment. We also take special pride in offering guidance and dedicated
            learning support for revert brothers and sisters, helping them understand the fundamentals of Islam, build a strong connection
            with the Qur'an, and grow confidently in their faith through step-by-step, compassionate teaching. The Founder of The Quran
            Quest brings over 12 years of experience in Quranic teaching, having taught hundreds of students across different age groups
            and backgrounds. With a strong focus on quality, sincerity, and excellence in teaching, the institute follows a balanced approach
            that combines authentic Islamic methodology with modern educational practices. Alongside the Founder, we have a
            professional and dedicated team of qualified instructors and academic support staff who ensure personalized attention,
            continuous guidance, and a smooth learning experience for every student. Our team is committed to supporting both learners
            and parents, making sure each student progresses with confidence, consistency, and spiritual growth. At The Quran Quest, we
            believe that learning the Qur'an is not just about gaining knowledge — it is about building character, strengthening faith, and
            nurturing a lifelong relationship with the words of Allah.
          </p>
        </div>
      </section>

      <CourseGrid title="Courses Designed for Adults" courses={adultCourses} />
      <CourseGrid title="Courses Designed for Kids" courses={kidsCourses} />

      {/* Principles Section */}
      <section className="bg-[#F5F2E9] py-16 px-5 mt-12">
        <h2 className="font-amstel text-4xl text-[#1F596B] text-center mb-20 leading-tight">
          Principles That Shape Our<br />Learning Environment
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 max-w-5xl mx-auto mb-12">
          {principles.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-4 ${index === principles.length - 1 ? 'col-span-2 sm:col-span-1' : ''
                }`}
            >
              <img src={item.icon} alt={item.name} className="w-16 h-16" />
              <p className="font-dm text-sm sm:text-base font-light text-center">
                {item.name}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">

          <a href="#"
            className="font-dm bg-[#1F596B] hover:bg-[#174a5a] text-white px-8 py-2.5 rounded-tl-xl rounded-br-xl transition duration-200"
          >
            Join Now
          </a>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-16 px-5">
        <h2 className="font-amstel text-4xl text-[#1F596B] text-center mb-15 leading-tight">
          What Our Students Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {feedbacks.map((item, index) => (
            <div
              key={index}
              className="bg-[#F5F2E9] rounded-tl-3xl rounded-br-3xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-5 h-5 ${i < item.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Review */}
              <p className="font-dm text-sm text-gray-700 leading-relaxed mb-6 flex-1">
                "{item.review}"
              </p>

              {/* Name & City */}
              <div>
                <p className="font-dm font-semibold text-[#1F596B]">{item.name}</p>
                <p className="font-dm text-xs text-gray-500">{item.city}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default Homepage