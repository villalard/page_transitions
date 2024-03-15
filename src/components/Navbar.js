import { Link } from 'react-router-dom'

const Navbar = () => {
return (
    <ul style={{ listStyleType: 'none', display: 'flex' }}>
            <Link to="/"><li style={{ margin: '0 10px' }}>Home</li></Link>
            <Link to="/about"><li style={{ margin: '0 10px' }}>About</li></Link>
            <Link to="/contact"><li style={{ margin: '0 10px' }}>Contact</li></Link>
    </ul>
)
}

export default Navbar