import React from 'react'
import { Link } from 'react-router-dom'
import HeroImage from '../images/Fee-Structure-Hero.jpg'

const plans = [
  {
    name: 'Plan A',
    days: '2 Days / Week',
    price: 28,
    features: [
      '8 classes per month',
      '30-minute class duration',
      '1 makeup class',
      'Free books',
      'Tarbiyah included',
      '2 trial sessions',
    ],
  },
  {
    name: 'Plan B',
    days: '3 Days / Week',
    price: 40,
    features: [
      '12 classes per month',
      '30-minute class duration',
      '2 makeup classes',
      'Free books',
      'Tarbiyah included',
      '3 trial sessions',
      'Recitation Ijazah',
      'Certificate',
      'Daily progress report',
    ],
  },
  {
    name: 'Plan C',
    days: '4 Days / Week',
    price: 54,
    features: [
      '16 classes per month',
      '30-minute class duration',
      '3 makeup classes',
      'Free books',
      'Tarbiyah included',
      '4 trial sessions',
      'Recitation Ijazah',
      'Certificate',
      'Daily progress report',
    ],
  },
  {
    name: 'Plan D',
    days: '5 Days / Week',
    price: 68,
    features: [
      '20 classes per month',
      '30-minute class duration',
      '4 makeup classes',
      'Free books',
      'Tarbiyah included',
      '5 trial sessions',
      'Recitation Ijazah',
      'Certificate',
      'Daily progress report',
    ],
  },
  {
    name: 'Plan E',
    days: '6 Days / Week',
    price: 80,
    features: [
      '24 classes per month',
      '30-minute class duration',
      '5 makeup classes',
      'Free books',
      'Tarbiyah included',
      '6 trial sessions',
      'Recitation Ijazah',
      'Certificate',
      'Daily progress report',
    ],
  },
]

const PricingCard = ({ plan }) => (
  <div className="bg-white rounded-tl-3xl rounded-br-3xl shadow-md hover:shadow-xl transition duration-300 flex flex-col overflow-hidden">
    {/* Header */}
    <div className="bg-[#1F596B] px-6 py-6 text-center">
      <h3 className="font-amstel text-xl sm:text-2xl text-white mb-1">{plan.name}</h3>
      <p className="font-dm text-sm text-gray-200">{plan.days}</p>
    </div>

    {/* Price */}
    <div className="px-6 py-6 text-center border-b border-gray-100">
      <span className="font-amstel text-4xl sm:text-5xl text-[#1F596B]">£{plan.price}</span>
      <span className="font-dm text-sm text-gray-500 ml-1">/ month</span>
    </div>

    {/* Features */}
    <div className="px-6 py-6 flex-1">
      <ul className="space-y-3">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#1F596B] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-dm text-sm text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* CTA */}
    <div className="px-6 pb-6">
      <Link
        to="/enrollment"
        className="block text-center font-dm bg-[#1F596B] hover:bg-[#174a5a] text-white py-3 rounded-tl-xl rounded-br-xl transition duration-200"
      >
        Enroll Now
      </Link>
    </div>
  </div>
)

const Feestructure = () => {
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
            Fee Structure
          </h1>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 sm:py-20 px-6 sm:px-5">
        <h2 className="font-amstel text-2xl sm:text-3xl md:text-4xl text-[#1F596B] text-center mb-4">
          Choose Your Plan
        </h2>
        <p className="font-dm text-sm sm:text-base text-gray-500 text-center mb-10 sm:mb-14 max-w-xl mx-auto">
          Flexible pricing plans designed to fit your schedule and learning goals.
        </p>

        {/* Top row - 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.slice(0, 3).map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>

        {/* Bottom row - 2 cards centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mt-6">
          {plans.slice(3).map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </section>

      {/* Inquiry Section */}
      <section className="py-16 sm:py-24 px-6 sm:px-5 bg-[#F5F2E9]">
        <div className="max-w-xl mx-auto">
          <h2 className="font-amstel text-2xl sm:text-3xl md:text-4xl text-[#1F596B] text-center mb-3">
            Have Any Questions?
          </h2>
          <p className="font-dm text-sm sm:text-base text-gray-500 text-center mb-10">
            We're here to help. Fill out the form below and we'll get back to you shortly.
          </p>

          <form action="https://formsubmit.co/thequranquestofficial@gmail.com" method="POST" className="space-y-5">
            {/* Disable captcha (optional) */}
            <input type="hidden" name="_captcha" value="false" />
            {/* Redirect after submission (optional - change URL to your thank you page) */}
            <input type="hidden" name="_next" value="https://thequraanquest.com/fee-structure" />
            {/* Subject line */}
            <input type="hidden" name="_subject" value="New Inquiry from Fee Structure Page" />

            <div>
              <label className="font-dm text-sm text-gray-700 block mb-1.5">Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your full name"
                className="w-full font-dm text-sm px-4 py-3 border border-gray-300 rounded-tl-xl rounded-br-xl focus:outline-none focus:border-[#1F596B] transition duration-200 bg-white"
              />
            </div>
            <div>
              <label className="font-dm text-sm text-gray-700 block mb-1.5">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Your email address"
                className="w-full font-dm text-sm px-4 py-3 border border-gray-300 rounded-tl-xl rounded-br-xl focus:outline-none focus:border-[#1F596B] transition duration-200 bg-white"
              />
            </div>
            <div>
              <label className="font-dm text-sm text-gray-700 block mb-1.5">Phone</label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="Your phone number"
                className="w-full font-dm text-sm px-4 py-3 border border-gray-300 rounded-tl-xl rounded-br-xl focus:outline-none focus:border-[#1F596B] transition duration-200 bg-white"
              />
            </div>
            <div>
              <label className="font-dm text-sm text-gray-700 block mb-1.5">Message</label>
              <textarea
                rows={4}
                name="message"
                required
                placeholder="How can we help you?"
                className="w-full font-dm text-sm px-4 py-3 border border-gray-300 rounded-tl-xl rounded-br-xl focus:outline-none focus:border-[#1F596B] transition duration-200 bg-white resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full font-dm bg-[#1F596B] hover:bg-[#174a5a] text-white py-3 rounded-tl-xl rounded-br-xl transition duration-200 cursor-pointer"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Feestructure