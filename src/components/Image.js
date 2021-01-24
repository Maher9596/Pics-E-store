import React, {useState, useContext} from 'react'
import PropTypes from "prop-types"
import {Context} from '../Context'

function Image({className, img}) {
    const[isHovered, isSetHovered] = useState(false)
    const {toggleFavorite, addToCart, cartItems, removeFromCart} = useContext(Context)
// --------------------------
    function heartIcon() {
        if(img.isFavorite){
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        }else if(isHovered){
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }
// --------------------------
    function cartIcon() {
        const alreadyInCart = cartItems.some(item  => item.id === img.id)
        if(alreadyInCart){
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id)}></i>
        }else if(isHovered) {
          return  <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>

        }
    }
    
//   ---------------------------
    return (
        <div className={`${className} image-container`} 
            onMouseEnter={() => isSetHovered(true)}
            onMouseLeave={() => isSetHovered(false)}
        >
            <img src={img.url} className="image-grid" alt=""/>
            {heartIcon()}
            {cartIcon()}                      
        </div>
    )
    
}
// ------------------------
Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image

// WE TAKE THE CLASSNAME DETERMINED FROM PHOTOS AND STICKING IT TO CLASSNAME PROPERTY AND IMAGE-CONTAINER TO CONTAIN OUR GRID
// AND WE RENDER AN ACTUAL IMAGE ELEMENT AND THE SOURCE IS WHATEVER THE URL IS FROM THE OBJECT THAT WE GOT IN THE PROPS img
// I USED ONMOUSENETER/LEAVE FOR THE DIV TO RENDER THE HEART SHAPE CONDITIONALLY