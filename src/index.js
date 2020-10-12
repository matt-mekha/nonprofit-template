import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link, useLocation } from 'react-router-dom';

import pages from "./data/pages.json";

const NavBar = () => {
  const path = useLocation().pathname;
  let currentPage;
  pages.some(page => {
    const match = page.link === path;
    if(match) {
      currentPage = page;
    }
    return match;
  });
  
  return (
    <header className="navBar">
      {pages.map((page, i) => (
        <Link key={i} to={page.link} className={`navButton ${currentPage.name === page.name ? "navButtonActive" : ""}`}>{page.name}</Link>
      ))}
    </header>
  )
}

const Footer = () => {
  return <footer></footer>
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <main className="main">
        <Switch>
          {
              pages.map((page, i) => {
                  return (
                      <Route exact path={page.link} key={i}>
                          {require(`./components/${page.fileName}`).default()}
                      </Route>
                  );
              })
          }
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);