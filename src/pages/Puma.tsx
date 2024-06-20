import React from "react"
import AdiFOM_TRXN from '../assets/AdiFOM_TRXN_Shoes_Black_IG7453_01_standard.webp';
import { Link } from "react-router-dom";

import Puma_Trinity from "../assets/Puma_Trinity.webp";
export type AdidasItem = {
  model: string;
  collection: string;
  price: string;
  picture: string;
  id: number
};

export const pumaArr: AdidasItem[] = [
  {
    id: 0,
    model: 'Puma',
    collection: 'new collection',
    price: '10000$',
    picture: Puma_Trinity,
  },
  {
    id: 1,
    model: 'Puma',
    collection: 'new collection1',
    price: '20000$',
    picture: Puma_Trinity,
  },
  {
    id: 2,
    model: 'Puma',
    collection: 'new collection2',
    price: '30000$',
    picture: Puma_Trinity,
  }
];



export const Puma = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginRight: "40px" }}>
      {pumaArr.map((item, index) => (
        <div >
          <Link key={index} to={`/puma/${item.id}`}>
            <img src={item.picture} alt={item.model} style={{ width: "200px", height: "200px", marginRight: "20px" }} />
          </Link>

          <h3>{item.model}</h3>
          {/* <p>{item.collection}</p> */}
          <p>{item.price}</p>
        </div>

      ))}
      <h2  >PUMA</h2>
      <div>
        <p style={{ display: "flex", justifyContent: "center" }}>
          Засновник «Puma», Рудольф Дасслер, народився навесні 1898 року в небагатій сім'ї взуттєвого майстра та прачки. У 1920 році його батьки зважилися на авантюру та відкрили власний взуттєвий цех. Крістофер Дасслер (батько сімейства), Адольф (молодший брат) займалися виробленням матеріалів, а мати і сестри робили викрійки — фабрика випускала спальні тапочки та конструктивно прості тенісні туфлі. Рудольф поринув у сімейний бізнес у 1923 році
        </p>
      </div>

    </div >
  )
} 
