import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link, useLocation } from 'react-router-dom';

import "./styles/all.scss"
import "./styles/all-mobile.scss"

import info from './data/info.json';

const NavBarIcon = ({ toggle, setMenuOpen, isMenuOpen }) => (
  <button className={`navBarMenuIconContainer ${setMenuOpen !== isMenuOpen ? "navBarMenuIconContainerVisible" : ""}`}>
    <img
      onClick={() => toggle(setMenuOpen)}
      className="navBarMenuIcon"
      src={`img/menu-${setMenuOpen ? "open" : "close"}.svg`}
      alt={`${setMenuOpen ? "Open" : "Close"} Menu`}
    />
  </button>
)

const NavBar = () => {
  const [menuOpen, toggleMenu] = useState(false);

  const path = useLocation().pathname;
  let currentPage;
  info.pages.some(page => {
    const match = page.link === path;
    if (match) {
      currentPage = page;
    }
    return match;
  });

  return (
    <header className={`navBar ${menuOpen ? "navBarOpen" : ""}`}>
      <Link to="/"><img className="navBarLogo" src="img/logo.svg" alt="Logo" /></Link>
      <NavBarIcon toggle={toggleMenu} setMenuOpen={true} isMenuOpen={menuOpen} />
      <NavBarIcon toggle={toggleMenu} setMenuOpen={false} isMenuOpen={menuOpen} />
      <p className="navBarTitle">{info.title}</p>
      <nav className="navBarButtonContainer">
        {info.pages.map((page, i) => (
          <Link
            onClick={() => setTimeout(() => toggleMenu(false), 200)}
            key={i}
            to={page.link}
            className={`navBarButton ${currentPage.name === page.name ? "navBarButtonActive" : ""}`}
          >
              {page.name}
          </Link>
        ))}
      </nav>
    </header>
  )
}

const Footer = () => (
  <footer className="footer">
    <p className="footerNotice">
      <i>{info.title}</i>{` is a Section 501(c) (3) charitable organization, EIN ${info.EIN}. All donations are deemed tax-deductible absent any limitations on deductibility applicable to a particular taxpayer. No goods or services were provided in exchange for your contribution.`}
    </p>
  </footer>
)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <main className="main">
        <Switch>
          {info.pages.map((page, i) => (
            <Route exact path={page.link} key={i}>
              {require(`./pages/${page.fileName}`).default()}
            </Route>
          ))}
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);