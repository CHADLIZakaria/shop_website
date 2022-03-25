import React, { useEffect, useState } from 'react'

const Porgress = () => {
    const [width, setWidth] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            if(width===100)
            setWidth(0)
            else 
            setWidth(width+25)
        }, 500)
        return () => clearInterval(interval);
    }, [width])
    
  return (
    <div class="progress w-50 mx-auto my-5">
        <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style={{width: `${width}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    
  )
}

export default Porgress