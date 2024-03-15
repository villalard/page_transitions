import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <AnimatedRoutes />
    </Router>
  </>);
}

export default App;
