import { useParams } from "react-router-dom";
import { adidasArr } from "./Adidas";
import { pumaArr } from "./Puma";

export const Model = () => {
  const params = useParams()
  console.log(params.id);
  return (
    <div style={{ textAlign: "center" }}>
      <h2> {adidasArr[Number(params.id)].model} </h2>
      <h4> {adidasArr[Number(params.id)].collection} </h4>
      <h3> {adidasArr[Number(params.id)].price} </h3>
      <img src={adidasArr[Number(params.id)].picture} alt={adidasArr[Number(params.id)].model} style={{ width: '600px', height: 'auto', marginRight: "10px" }} />

    </div>
  );
};




export const Model1 = () => {
  const params = useParams()
  console.log(params.id);
  return (
    <div style={{ textAlign: "center" }}>
      <h2> {pumaArr[Number(params.id)].model} </h2>
      <h4> {pumaArr[Number(params.id)].collection} </h4>
      <h3> {pumaArr[Number(params.id)].price} </h3>
      <img src={pumaArr[Number(params.id)].picture} alt={adidasArr[Number(params.id)].model} style={{ width: '600px', height: 'auto', marginRight: "10px" }} />
    </div>
  );
};


