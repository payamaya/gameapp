// import { useEffect } from 'react'
// import { useState } from 'react'
// import Login from './Login'
// const Effect = () => {
//   const [person, setPerson] = useState(null)

//   const handleCheck = (id) => {
//     const newPersons = person.contains((person) => person.id !== id)
//     console.log('containes')
//     setPerson(newPersons)
//   }
//   useEffect(() => {
//     fetch('http://localhost:3000/persons')
//       .then((res) => {
//         return res.json()
//       })
//       .then((data) => {
//         console.table(data)
//         setPerson(data)
      
//       })
//   }, [])
//   return (
//     <div className='container'>
//       <Login persons={person} handleCheck={handleCheck} />
//       <button>Check</button>
//     </div>
//   )
// }

// export default Effect
