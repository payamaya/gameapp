import React from 'react'
import ButtonLife from './ButtonLife'
import '../styles/flaminglakethree.css'
const FlamingLakeThree = () => {
  const obj = {
    title: 'FlamingLake 3',
    para: `Awesome work, one last choice before you enter Garuru nest!
`,
  }
  return (
    <div className='containerlakethree'>
      <div className='FlamingLake-item'>
        <h1 className='title-head'>{obj.title}</h1>
        <div className='textFlame'>{obj.para}</div>
      </div>
      <ButtonLife link='/garurunest'></ButtonLife>
    </div>
  )
}

export default FlamingLakeThree
