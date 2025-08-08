import Button from '@/components/button/Button'
import Image from 'next/image'
import React from 'react'

const Category = ({params}) => {
  return (
    <div>
      <h1 className="text-[#53c28b] text-xl font-bold ">{params.category}</h1>
      <div className={`flex gap-10 mt-12 mb-24  `}>

        {/* ${index % 2 === 1 ? "reverse-row" : ""} */}

        {/* content */}
        <div className="flex-1 flex flex-col gap-5 justify-center ">
          <h1 className='text-5xl '>{params.category}</h1>
          <p className='text-xl'>{params.desc}</p>
          <Button title={"See More"} pad={"py-3 px-5"} url={"#"} />
        </div>
        {/* image */}
        <div className="flex-1 h-[500px] relative">
          <Image
            src="/illustration.png"
            alt="Hero Image"
            fill={true}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Category