import React from 'react';
import styles from './pages/my-style.module.css';
import { PageOne } from './pages/PageOne';
import { PageTwo } from './pages/PageTwo';
import { PageThree } from './pages/PageThrree';
import { Error404 } from './pages/Error404';
import { Navigate, Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { S } from './pages/_styles';

const PATH = {
  PAGE1: "/page1",
  PAGE2: "/page2",
  PAGE3: "/page3",
  PAGE4: "/error404"
} as const


function App() {
  return (
    <div>
      <div className={styles.header}>  <h1>HEADER</h1>  </div>
      <div className={styles.body}>
        <div className={styles.nav}>
          <S.NavWrapper><NavLink to={PATH.PAGE1} >Page1</NavLink> </S.NavWrapper>
          <S.NavWrapper><NavLink to={PATH.PAGE2} >Page2</NavLink></S.NavWrapper>
          <S.NavWrapper><NavLink to={PATH.PAGE3} >Page3</NavLink></S.NavWrapper>
        </div>
        <div className={styles.content}>
          <Routes>
            <Route path={"/"} element={<Navigate to={"/page1"} />} />

            <Route path={PATH.PAGE1} element={<PageOne />} />
            <Route path={PATH.PAGE2} element={<PageTwo />} />
            <Route path={PATH.PAGE3} element={<PageThree />} />

            <Route path={PATH.PAGE4} element={<Error404 />} />
            <Route path="/*" element={<Navigate to={"/Error404"} />} />
          </Routes>

        </div>
      </div >
      <div className={styles.footer}>adidas 2024</div>
    </div >
  );
}




export default App;
