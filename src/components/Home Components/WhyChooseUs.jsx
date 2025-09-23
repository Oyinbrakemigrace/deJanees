import React from 'react'
import Heading from '../Heading'
import { FaArrowsRotate, FaHandshake, FaSuitcase } from 'react-icons/fa6';
import Card from '../Card';

const WhyChooseUs = () => {
    const whyChooseUs = [
  {
    id: 1,
    title: "End-to-End Delivery",
    description: "From generation to distribution and smart metering — one trusted partner for the full power value chain.",
    icon: <FaArrowsRotate />
  },
  {
    id: 2,
    title: "Trusted Partnerships",
    description: "World-class OEM technology with Hexing and other partners to ensure cutting-edge, reliable solutions.",
    icon: <FaHandshake />
  },
  {
    id: 3,
    title: "Proven Execution",
    description: "Multi-sector success across telecoms, banking, education, and agriculture — delivered with ISO-aligned standards.",
    icon: <FaSuitcase />
  }
];

  return (
    <div>
      <Heading text="Why Choose Us" />
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-6'>
        {
            whyChooseUs.map((item, index)=>(
                <Card key={index} icon={item.icon} title={item.title} desc={item.description} />
            ))
        }
      </div>
    </div>
  )
}

export default WhyChooseUs
