import React from 'react';
import { FaRegFileAlt } from 'react-icons/fa';
import { LuDownload } from 'react-icons/lu';
import { IoClose } from 'react-icons/io5';

function Card({data}) {
  return (
    <div className='relative w-60 h-72 bg-zinc-900/90 rounded-[45px] overflow-hidden text-white py-10 px-8'>
        <FaRegFileAlt />
        <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full left-0'>
            <div className='flex items-center justify-between mb-3 px-8 py-3'>
                <h5>{data.filesize}</h5>
                <span className='w-7 h-7 bg-sky-200 rounded-full flex items-center justify-center'>
                    {data.close ? <IoClose /> : 
                    <LuDownload size=".7em" color='#fff'/>
                    }
                </span>
            </div>
            {
                data.tagDetails.isOpen && (
                    <div className={`tag w-full py-4 ${data.tagDetails.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                        <h3 className='text-sm font-semibold'>{data.tagDetails.tagTitle}</h3>
                    </div>)
            }
        </div>
    </div>
  )
}

export default Card