import React, { useState } from 'react'

const ImagePreview = ({file}) => {
    const [preview, setPreview] = useState(null)
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload=() => {
        // console.log(reader.result)
        setPreview(reader.result)
    }
    return (
        <div>
           {preview &&
               <img src={preview} />  
           } 
        </div>
    )
}

export default ImagePreview