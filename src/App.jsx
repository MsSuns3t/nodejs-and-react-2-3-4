import Greeting from "./components/Greeting";
import BeverageList from "./components/BeverageList";
import { useState } from "react";
import Card from "./components/Card"

function App() {

  const [count, setCount] = useState(0);
  const greeting = useState(true);

  return (
    <div>
      <h1>Mijn React-app met Vite</h1>
      <Greeting name="Big Chungus" />
      <button onClick={() => setCount(count + 1)}>
        Je hebt {count} keer geklikt
      </button>
      <div className="cards-holder">
        <Card
          image="https://placehold.co/300x180" 
          title="Vakantie aan Zee" 
          description="Geniet van zon, zee en strand in deze prachtige kustbestemming."
          onMoreInfo={() => alert("Alert met meer info ofzo idk")}
        />
        <Card
          image="https://placehold.co/400x300"
          title="Stedentrip Parijs"
          description="Ontdek de lichtstad en bezoek iconische bezienswaardigheden."
          onMoreInfo={() => alert("Alert met meer info ofzo idk")}
        />
        <Card
          image="https://placehold.co/400x300"
          title="Avontuur in de Bergen"
          description="Ga hiken in de bergen en geniet van adembenemende uitzichten."
          onMoreInfo={() => alert("Alert met meer info ofzo idk")}
        />
      </div>
      <BeverageList />
    </div>
  );
}

export default App;