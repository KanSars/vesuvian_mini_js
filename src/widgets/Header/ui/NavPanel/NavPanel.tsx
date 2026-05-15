import { Link } from 'react-router-dom';

export const NavPanel = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/collections">Collections</Link></li>
        <li><Link to="/item2">Menu item 2</Link></li>
      </ul>
    </nav>
  );
};
