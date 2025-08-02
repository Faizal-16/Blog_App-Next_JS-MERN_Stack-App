import Button from '@/components/button/Button';
import Image from 'next/image'
import React from 'react'

// Metadata
export const metadata = {
  title: "About Us Page",
  description: "Here you can learn more about us",
};

const About = () => {
  return (
    <div className="flex flex-col items-center gap-5 w-full ">
      {/* image container */}
      <div className="relative w-full h-[25vh] ">
        <div className='bg-black/40 absolute top-0 left-0 w-full h-full z-[2]'/>
          <Image
            src="https://images.pexels.com/photos/2678468/pexels-photo-2678468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="bg-image"
            fill={true}
            className="object-cover z-[1] h-full w-full rounded-lg"
          />
        
        <div className="absolute left-3 bottom-3 z-[90] px-3 py-1 rounded-lg bg-[#53C28B] font-semibold">
          <h1 className=' text-white'>Digital Storytellers</h1>
          <p className=' text-white'>Handcrafting award winning digital experiences</p>
        </div>
      </div>

      {/* text container */}
      <div className="flex flex-1 ">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-3xl font-bold">Who Are We?</h1>
          <p>
            We are a team of passionate individuals dedicated to creating
            exceptional digital experiences. Our mission is to tell compelling
            stories through innovative design and technology.
            <br />
            <br />
            With a strong focus on user experience and a commitment to
            excellence, we bring your vision to life.
            <br />
            <br />
            Our team consists of designers, developers, and strategists who work
            collaboratively to deliver outstanding results for our clients.
          </p>
        </div>

        <div className=" flex flex-col items-start gap-3">
          <h1 className="text-3xl font-bold">What We Do?</h1>
          <p>
            We specialize in crafting digital solutions that engage and inspire.
            From website design and development to branding and digital
            marketing, we offer a comprehensive range of services tailored to
            meet your needs.
            <br />
            <br />
            - Creative Illustration
            <br />
            <br /> - Dynamic Web Development
            <br />
            <br /> - Fast and Handy Prototyping
          </p>
          <Button title={"Contact"} pad={"py-3 px-5"} url={"/contact"} />
        </div>
      </div>
    </div>
  );
}

export default About