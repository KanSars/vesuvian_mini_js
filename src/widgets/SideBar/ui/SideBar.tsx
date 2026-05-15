import { Link } from 'react-router-dom';

// todo: for deleting
export const SideBar = () => {
  return (
    <aside style={{ width: '250px', borderRight: '1px solid #eee', padding: '20px' }}>
      <h3>SideBar</h3>
      <ul>
        <li><Link to="/collections">Collections</Link></li>
        <li><Link to="/item2">Menu Item 2</Link></li>
      </ul>
    </aside>
  );
};
