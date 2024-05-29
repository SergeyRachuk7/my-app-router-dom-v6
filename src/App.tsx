import React from 'react';
import './App.css';
import { PageOne } from './pages/PageOne';
import { PageTwo } from './pages/PageTwo';
import { PageThree } from './pages/PageThrree';
import { Error404 } from './pages/Error404';
import styles from './pages/my-style.module.css';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <div className={styles.header}>  <h1>HEADER</h1>  </div>
      <div className={styles.body}>
        <div className={styles.nav} >
          NAVIGATION - here we have navigation
        </div>
        <div className={styles.content}>
          <Routes>
            <Route path={"/"} element={<Navigate to={"/page1"} />} />

            <Route path="/page1" element={<PageOne />} />
            <Route path="/page2" element={<PageTwo />} />
            <Route path="/page3" element={<PageThree />} />

            <Route path='/error404' element={<Error404 />} />
            <Route path="/*" element={<Navigate to={"/Error404"} />} />
          </Routes>

        </div>
      </div >
      <div className={styles.footer}>adidas 2024</div>
    </div >
  );
}


export default App;


