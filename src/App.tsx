import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import classNames from 'classnames';
import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';

export const App = () => (
  <>
    <nav className="navbar is-light is-fixed-top has-shadow">
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            to="/"
            className={({ isActive }) =>
              classNames('navbar-item', { 'is-active': isActive })
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/tabs"
            className={({ isActive }) =>
              classNames('navbar-item', { 'is-active': isActive })
            }
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>

    <div className="section">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tabs/:tabId?" element={<TabsPage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  </>
);
