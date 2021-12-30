import { Link } from 'react-router-dom';

import styles from "./styles.module.css";

function Header() {
  return (
    
    <header>
       
      <ul>
      
      <Link to="/authentication"><li>login/signup</li></Link>
     
        <Link to="/"><li>Online Store</li></Link>
        <Link to="/cart"><li>Cart</li></Link>
        <br/>
        
        

      </ul>
    </header>
    
  );
}

export default Header;
