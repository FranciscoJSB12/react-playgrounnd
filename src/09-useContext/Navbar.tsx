import { NavLink } from 'react-router-dom';

const routes = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/login',
    name: 'Login',
  },
  {
    path: '/about',
    name: 'About',
  },
];

export const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark rounded-3'>
      <div className='container-fluid'>
        <NavLink
          className='navbar-brand'
          to='/'
        >
          useContext
        </NavLink>
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav'>
            {routes.map(route => (
              <li
                className='nav-item'
                key={route.name}
              >
                <NavLink
                  to={route.path}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'active' : ''}`
                  }
                >
                  {route.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
