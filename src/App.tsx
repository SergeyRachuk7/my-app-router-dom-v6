import React from 'react';
import styles from './pages/my-style.module.css';
import { Adidas } from './pages/Adidas';
import { Puma } from './pages/Puma';
import { Adidastwo } from './pages/Adidastwo';
import { Error404 } from './pages/Error404';
import { Navigate, Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { S } from './pages/_styles';
import { Model } from './pages/Model';
import { Model1 } from './pages/Model';
const PATH = {
  PAGE1: "/adidas",
  PAGE2: "/puma",
  PAGE3: "/adidastwo",
  // PAGE4: "/error404"
} as const

function App() {
  return (
    <div>
      <div className={styles.header}>  <h1>HEADER</h1>  </div>
      <div className={styles.body}>
        <div className={styles.nav}>
          <S.NavWrapper><NavLink to={PATH.PAGE1} >Adidas</NavLink></S.NavWrapper>
          <S.NavWrapper><NavLink to={PATH.PAGE2} >Puma</NavLink></S.NavWrapper>
          <S.NavWrapper><NavLink to={PATH.PAGE3} >Adidastwo</NavLink></S.NavWrapper>
          {/* <a href="page3">page HTML</a> */}
        </div>
        <div className={styles.content}>
          <Routes>
            <Route path={"/"} element={<Navigate to={"/page1"} />} />

            <Route path={PATH.PAGE1} element={<Adidas />} />
            <Route path={PATH.PAGE2} element={<Puma />} />
            <Route path={PATH.PAGE3} element={<Adidastwo />} />
            <Route path="/adidas/:id" element={<Model />} />
            <Route path="/puma/:id" element={<Model1 />} />
            {/* <Route path={'/adidas/model'} element={<Model />} /> */}
            <Route path={'/*'} element={<Error404 />} />
            {/* <Route path={PATH.PAGE4} element={<Error404 />} /> */}
            {/* <Route path="/*" element={<Navigate to={"/Error404"} />} /> */}
          </Routes>

        </div>
      </div >
      <div className={styles.footer}> your choice 2024</div>
    </div >
  );
}




export default App;
