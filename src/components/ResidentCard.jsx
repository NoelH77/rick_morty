import axios from 'axios'
import React, { useEffect, useState } from 'react'

const residentsStatus = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-gray-500"
}

const ResidentCard = ({ resident }) => {

    const [residentInfo, setResidentInfo] = useState()
    

    useEffect(() => {
        axios.get(resident)
            .then((res) => setResidentInfo(res.data))
            .catch((err) => console.log(err))
    }, [])

  return (
    <article className='card bg-black'>
        <div className='relative card-y'>
            <img className='w-full' src={residentInfo?.image} alt="" />
            <div className='card absolute bottom-4 left-1/2 -translate-x-1/2 
            bg-[#020A02]/60 text-white p-1 px-2 flex gap-2 items-center
             rounded-sm'>
                <div className={`w-3 h-3  
                ${residentsStatus[residentInfo?.status]} rounded-full `}></div>
                <span>{residentInfo?.status}</span>
            </div>
        </div>
        <section className='my-5 pl-5'>
            <h3 className='text-[#FBFBFB] font-extrabold py-3 px-4'>{residentInfo?.name}</h3>
            <ul className='flex flex-col w-[270px]'>
                <li className='flex py-2'>
                    <span className='text-[#938686] pl-3 text-left'>Species</span>
                    <span className='px-[20%] text-[#FBFBFB] font-semibold'>{residentInfo?.species}</span>
                </li>
                <li className='flex py-2 '>
                    <span className='text-[#938686] pl-3 text-left'>Origin</span>
                    <span className='px-[23%] text-[#FBFBFB] font-semibold'>{residentInfo?.origin.name}</span>
                </li>
                <li className='flex py-2 pb-8'>
                    <span className='text-[#938686] pl-3 text-left'>Times appear</span>
                    <span className='px-[7%] text-[#FBFBFB] font-semibold'>{residentInfo?.episode.length} time</span>
                </li>
            </ul>
        </section>
    </article>
  )
}

export default ResidentCard