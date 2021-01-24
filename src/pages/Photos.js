import React, {useContext} from "react"

import Image from "../components/Image"
import {Context} from "../Context"
import {getClass} from "../utils"

function Photos() {
    const {allPhotos} = useContext(Context)
    
    const imageElements = allPhotos.map((img, i) => (
        <Image key={img.id} img={img} className={getClass(i)} />
    ))
    
    return (
        <main className="photos">
            {imageElements}
        </main>
    )
}

export default Photos

// WE ARE GETTING THE LIST OF ALLPHOTOS FROM CONTEXT AND MAPPING THROUGH THEM 
// GETCLASS IS ONLY RUNNING VANILLA JS FOR SIZE OF PICTURE
// THE PART THAT MAKES IMAGES WORK IS BY PASSING THE ENTIRE OBJECT IMG TO A PROP CALLED IMG