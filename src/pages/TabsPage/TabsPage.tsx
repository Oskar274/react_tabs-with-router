import { Outlet, NavLink } from 'react-router-dom';

export const TabsPage = () => {
  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          <li data-cy="Tab" className="is-active">
            <NavLink to="tab-1">Tab 1</NavLink>
          </li>
          <li data-cy="Tab">
            <NavLink to="tab-2">Tab 2</NavLink>
          </li>
          <li data-cy="Tab">
            <NavLink to="tab-3">Tab 3</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};
