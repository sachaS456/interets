import { useState } from 'react'
import Form from "./components/Form.jsx";
import ListOperation from "./components/ListOperation.jsx";
import calculInterets from "./calculInterets.js";

//// TODO POUR CHANGEMENT DE TAUX : METTRE UN TAUX PAR CHAQUE OPERATION ET UTILISER CE TAUX LA

function App() {
    const [operations, setOperations] = useState([]);
    const [balance, setBalance] = useState(0);
    const [interest, setInterest] = useState(3);
    const [benef, setBenef] = useState(0);

    function handleFormSubmit(operation) {
        const newOperations = Array.from(operations);
        newOperations.push(operation);

        setOperations(newOperations);
    }

    function handleClick() {
        setBenef(calculInterets(parseInt(balance), interest, operations));
    }

  return (
      <>
          <input type="number" value={balance} onChange={(e) => setBalance(e.target.value)}/>
          <input type="number" value={interest} onChange={(e) => setInterest(e.target.value)}/>

          <Form onAdd={handleFormSubmit}/>
          <ListOperation operations={operations}/>

          <button onClick={handleClick}>Calculer</button>

          <span>{benef}</span>
      </>
  )
}

export default App
