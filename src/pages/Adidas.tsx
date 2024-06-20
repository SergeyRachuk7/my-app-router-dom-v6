import React from "react";
import { Link } from "react-router-dom";

import AdiFOM_TRXN from '../assets/AdiFOM_TRXN_Shoes_Black_IG7453_01_standard.webp';
import PostMove_Mid from '../assets/PostMove_Mid_Cloudfoam_Super_Lifestyle_Basketball_Mid_Classic_Shoes_Black_GY7163_01_standard.webp';
import Superstar_XLG from '../assets/Superstar_XLG_Shoes_Black_IG9777_01_standard.webp';

export type AdidasItem = {
  model: string;
  collection: string;
  price: string;
  picture: string;
  id: number
};

export const adidasArr: AdidasItem[] = [
  {
    id: 0,
    model: 'ADIDAS ADIFOM TRXN',
    collection: 'new collection1',
    price: '100200$',
    picture: AdiFOM_TRXN,
  },
  {
    id: 1,
    model: 'ADIDAS ADIFOM SUPER',
    collection: 'new collection22',
    price: '200300$',
    picture: PostMove_Mid,
  },
  {
    id: 2,
    model: 'ADIDAS SUPER SUPERSKI',
    collection: 'new collection333',
    price: '300400$',
    picture: Superstar_XLG,
  }
];


export const Adidas = () => {
  return (
    <div>
      <h2>ADIDAS</h2>
      <div style={{ display: "flex", justifyContent: "center" }} >
        {adidasArr.map((item, index) => (
          <div >
            <Link key={index} to={`/adidas/${item.id}`}>
              <img src={item.picture} alt={item.model} style={{ width: "200px", height: "200px", marginRight: "10px" }} />
            </Link>
            <h3>{item.model}</h3>
            {/* <p>{item.collection}</p> */}
            <p>{item.price}</p>
          </div>

        ))}
      </div>
      <p>Мы начали в туалете и завоевали мир. А между тем мы добились больших успехов и иногда с трудом достигали наших целей. Мы сделали все возможное для лучшего. Мы улучшились и выросли. Смотрим в будущее, всегда помня, откуда мы пришли. Это наша история</p>
    </div>
  );
}; 