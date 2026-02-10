import React, { useEffect, useRef } from 'react'
import Image1 from '../images/Image1.png'
import Image2 from '../images/Image2.png'
import Image3 from '../images/Image3.jpg'


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


const Aboutus = () => {
  
  return (
    <div>
      {/* About Section */}
      <section className=''>
        {/* Image with overlay and title */}
        <div className="relative w-full h-[600px] sm:h-[600px] bg-cover bg-center"
          style={{ backgroundImage: `url(${Image3})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 flex items-center justify-center h-full">
            <h2 className="font-amstel text-4xl sm:text-5xl md:text-6xl text-white text-center px-4">
              The Quran Quest Online Academy
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

    </div>
  )
}

export default Aboutus
