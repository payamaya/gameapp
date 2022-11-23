import React from 'react'
import ButtonLife from './ButtonLife'
import '../styles/flaminglake.css'
const FlamingLakePage = () => {
  const obj = {
    title: 'FlamingLake 1',
    para: `You have to make three choices in order to pass
through Flaming Lake. Will it be right or left?
`,
  }
  return (
    <div className='containerlake'>
      <div className='FlamingLake-item'>
        <h1 className='title-head'>{obj.title}</h1>
        <div className='textFlame'>{obj.para}</div>
      </div>
      <ButtonLife link='/flaminglaketwo'></ButtonLife>
    </div>
  )
}

export default FlamingLakePage
