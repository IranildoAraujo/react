import React from "react";
import "./style.css";
import { useAppSelector } from "../../store/hooks";
//import { useGetAndress } from "../Pather";

const Andress: React.FC = () => {
  //const andress = useGetAndress();
  const andressState = useAppSelector((state) => state.andressStore);
  const andress = andressState.andressDTO;

  return (
    andress ? (
    <div className="andress">
      <h3>Endereço: </h3>
      <label>Cep: {andress.cep}</label>
      <label>Logradouro: {andress.logradouro}</label>
      <label>Complemento: {andress.complemento}</label>
      <label>Bairro: {andress.bairro}</label>
      <label>UF: {andress.uf}</label>
      <label>IBGE: {andress.ibge}</label>
      <label>GIA: {andress.gia}</label>
      <label>DDD: {andress.ddd}</label>
      <label>SIAFI: {andress.siafi}</label>
    </div>
    ) : null
  );
};

export default Andress;
