import React from 'react'
import images from '../../img'
import Style from './Herosection.module.css'

function Herosection() {
  return (
    <div className={Style.Rectangle26} >
      <div className={Style.Rectangle}>
      <span className={Style.para}>
        Complete your profile to unlock new features
        </span>
        <div className={Style.Group}>
        <img src={images.Dashboardimg1} alt='dashboard' className={Style.Vector} />
        </div>
        <div className={Style.Group1}>
        <img src={images.frame24} alt='frame' className={Style.Vector1}  />
        </div>
        <div className='Frame-8'> 
        <button className='Continue'> Continue</button>
        </div>
        </div>
    </div>
  )
}

export default Herosection
