import { Link } from 'react-router-dom'

const MemicDunjan = () => {
  //  https://stackoverflow.com/questions/51839708/compare-part-of-url-with-a-variable  gälle url delen

  const lastPartOfUrl = window.location.href.split('/').pop()

  if (lastPartOfUrl === 'p1') {
    return (
      <p>
        Congrats you made it!
        <Link to='./FlamingLakePage'>
          <button>continue</button>
        </Link>
      </p>
    )
  } else if (lastPartOfUrl === 'p2') {
    return (
      <p>
        You lost -1
        <Link to='./MemicDunjan'>
          <button>Try Again</button>
        </Link>
      </p>
    )
  } else alert('something went wrong ')
}
export default MemicDunjan
