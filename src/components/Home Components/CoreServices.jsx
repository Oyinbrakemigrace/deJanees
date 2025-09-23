import React from 'react'
import Heading from '../Heading'
import Card from '../Card'
import { FaGlobeAfrica, FaTachometerAlt } from 'react-icons/fa';
import { IoMdBatteryFull } from 'react-icons/io';
import { GiNetworkBars } from 'react-icons/gi';

const CoreServices = () => {
const services = [
  {
    id: 1,
    title: "Rural Electrification",
    description: "Hybrid systems and mini-grids delivering 24/7 power to underserved communities.",
    icon: <FaGlobeAfrica />
  },
  {
    id: 2,
    title: "Smart Metering & IoT",
    description: "Reliable metering and monitoring powered by global partners like Hexing.",
    icon: <FaTachometerAlt />
  },
  {
    id: 3,
    title: "Industrial Generators",
    description: "Backup and hybrid generator systems for continuous operations.",
    icon: <IoMdBatteryFull />
  },
  {
    id: 4,
    title: "Telecoms Powering",
    description: "Turnkey energy solutions for telecom sites, integrating renewables.",
    icon: <GiNetworkBars />
  }
];



  return (
    <div>
      <Heading text="Our Core Services" />
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-6'>
              {
                  services.map((item, index)=>(
                      <Card key={index} icon={item.icon} title={item.title} desc={item.description} />
                  ))
              }
            </div>
    </div>
  )
}

export default CoreServices
