import React from "react"
import Image from "../components/image"

const Hero = () => {
  

  return (
    <>
      <div>
        <section className="row">
          <header className=" absolute title">
            <h1 className="no-margin">
              {" "}
              <span className="low-light-yellow">KODA<span className='break'>CHROME</span></span>
            </h1>
          </header>
          <Image className="hero-img overlay relative" />
        </section>

      </div>
    </>
  )
}
export default Hero
