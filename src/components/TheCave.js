// import CountLife from './CountLife'
const TheCave = ({ children, reverse }) => {
  return (
    <div>
      <h1>The Cave</h1>
      {/* <CountLife reverse={false}></CountLife> */}
      {reverse}
      {children}
    </div>
  )
}
export default TheCave
