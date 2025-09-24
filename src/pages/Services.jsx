import React from 'react'
import Intro from '../components/Services Components/Intro'
import ServicesCards from '../components/Services Components/ServicesCards'
import Why from '../components/Services Components/Why'

const Services = () => {
  return (
    <div>
      <section className="bg-slate-200 px-6 lg:px-16 py-8 pt-32">
        <Intro />
      </section>
      <section className="bg-slate-200 px-6 lg:px-16 pb-10">
        <ServicesCards />
      </section>
      <section className="bg-company-blue/20 px-6 lg:px-16 py-10">
        <Why />
      </section>
    </div>
  )
}

export default Services
