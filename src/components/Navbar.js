import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
    </ul>
  )
}

export default Navbar