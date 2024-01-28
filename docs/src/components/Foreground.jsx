import React, { useState } from 'react'
import Card from './Card'

function Foreground() {

// const ref = useRef(null);

    const data = [
        {desc: "Lorem dolor sit amet consectetur adipisicing.",
         filesize: ".9mb", 
         close: true, 
         tagDetails: { isOpen: true, tagTitle: "Download Now", tagColor: "green"},
        },
        {desc: "Lorem dolor sit amet consectetur adipisicing.",
         filesize: ".9mb", 
         close: true, 
         tagDetails: { isOpen: true, tagTitle: "Upload", tagColor: "blue"},
        },
        {desc: "Lorem dolor sit amet consectetur adipisicing.",
         filesize: ".9mb", 
         close: true, 
         tagDetails: { isOpen: false, tagTitle: "Download Now", tagColor: "green"},
        },
    ];
    useState()
  return (
    <div className='fixed z-[3] top-0 left-0 w-full h-full bg-zinc-800/50 gap-10 flex flex-wrap p-5'>
        {data.map((item, index)=>(
            <Card data={item}/>
        ))}
      </div>
  )
}

export default Foreground