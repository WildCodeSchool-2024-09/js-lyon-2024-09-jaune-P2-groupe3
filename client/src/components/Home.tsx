import "../App.css";

import BeerContext from "../Contexts/BeerContext";

import { useContext } from "react";
import BreweriesList from "./BreweriesList";
import BoutonSoif from "./boutonSoif";

function Home() {

  const { beerCount } = useContext(BeerContext);
 
  return (
    <>
      <h2 className="titreMain">Voyagez dans le monde des brasseries</h2>
      <BoutonSoif />
      <h3>Ma sélection : {beerCount} brasseries</h3>
      <div className="cardContainer">
        <BreweriesList />
      </div>
    </>
  );
}

export default Home;
