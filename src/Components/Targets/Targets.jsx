import React from 'react'
import Style from './Targets.module.css'
import images from '../../img'

function Targets() {
  return (
    <div className={Style.Rectangle26}>
      <h3>Your Targets</h3>
      <div className={Style.Line45}>
      <div className={Style.Rectangle167}>
      <img src={images.fund} alt='fund' width={50} height={50} className={Style.imgrectangle}/>
        <h3 className={Style.mfund} >Mutual Funds</h3>
        <span>0.00</span>
        <button>Submit</button>
      </div>
      <div className={Style.Rectangle153}>
      <img src={images.gold} alt='fund' width={50} height={50} className={Style.imgrectangle}/>
      <h3 className={Style.Digital}>Digital Gold</h3>
      <p>Set Your Monthly Target</p>
      <button>Set Target</button>
      </div>
      <div className={Style.Rectangle152}>
      <img src={images.shield} alt='fund' width={50} height={50} className={Style.imgrectangle}/>
      <h3 className={Style.Insurance}>Insurance</h3>
      <p>Set Your Monthly Target</p>
      <button>Set Target</button>
      </div>
      <div className={Style.Rectangle154}>
      <img src={images.certificate} alt='fund' width={50} height={50} className={Style.imgrectangle}/>
      <h3 className={Style.Bonds}>Bonds</h3>
      <p>Set Your Monthly Target</p>
      <button>Set Target</button>
      </div>
      </div>
    </div>
  )
}

export default Targets
