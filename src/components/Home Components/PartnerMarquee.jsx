import React from 'react'
import img1 from '../../assets/projects/1.jpg'
import img2 from '../../assets/projects/2.jpg'
import img3 from '../../assets/projects/3.jpg'
import img4 from '../../assets/projects/4.jpg'
import img5 from '../../assets/projects/5.jpg'
import img6 from '../../assets/projects/6.jpg'
import img7 from '../../assets/projects/7.jpg'
import img8 from '../../assets/projects/8.jpg'
import img9 from '../../assets/projects/9.jpg'
import img10 from '../../assets/projects/10.jpg'
import img11 from '../../assets/projects/11.jpg'
import Marquee from 'react-fast-marquee';



const PartnerMarquee = () => {
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];
  return (
    <div className="overflow-hidden whitespace-nowrap py-7">
            <Marquee speed={200} pauseOnHover={true}>
                <div className="flex space-x-6">
                    {images.map((src, index) => (
                        <img key={index} src={src} alt={`Image ${index + 1}`} className="lg:w-[15rem] lg:h-[15rem] rounded-2xl w-[10rem] h-[10rem] inline-block mr-4" />
                    ))}
                </div>
            </Marquee>
        </div>
  )
}

export default PartnerMarquee
