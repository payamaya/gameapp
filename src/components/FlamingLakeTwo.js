import React from 'react'
import ButtonLife from './ButtonLife'
import '../styles/flaminglaketwo.css'
const FlamingLakeTwo = ({ para, title }) => {
  const obj = {
    title: 'FlamingLake 2',
    para: `Great first choice, now you have to decide once again, right or left?
`,
  }
  return (
    <div className='containerlaketwo'>
      <div className='FlamingLake-item'>
        <h1 className='title-head'>{obj.title}</h1>
        <div className='textFlame'>{obj.para}</div>
      </div>
      <ButtonLife link='/flaminglakethree'></ButtonLife>
    </div>
  )
}

export default FlamingLakeTwo
