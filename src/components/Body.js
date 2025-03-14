import React from 'react'

function Body() {
  return (
    <div className='Hero'>
      <div className="heroContent">
        <h1>
        YOUR FEET DESERVE THE BEST
        </h1>
        <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH
            OUR
            SHOES.</p>

        <div className="heroBtn">
            <input type="button" value="Shop Now" />
            <input type="button" value="Category" />
        </div>
        <div className="shopping">
            <p>Also Available on</p>
            <div className="brand-icons">
                <img src="./images/amazon.png" alt="" />
                <img src="./images/flipkart.png" alt="" />
            </div>
        </div>
      </div>
      <div className="heroImage">
        <img src="./images/shoe_image.png" alt="shoe" />
      </div>
    </div>
  )
}

export default Body
