import { useState, useEffect } from "react";
import "./App.css";

const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";
const CAT_PREFIX_IMAGE_URL = "https://cataas.com";

export function App() {
  const [fact, setFact] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  // para recuperar la cita (fact) al cargar la página
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);
      });
  }, []);

  //para recuperar la imagen cada vez que la cita cambia
  useEffect(() => {
    if (!fact) return;

    const firstWord = fact.split(" ")[0];

    fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
      .then((res) => res.json())
      .then((response) => {
        const { url } = response;
        setImageUrl(url);
      });
  }, [fact]);

  // encapsulamos la parte estática de la url de la api en CAT_PREFIX... para poder interpolar esa parte directamente
  // en el src de la img en el return, y dejar dentro del useEffect únicamente la información variable que necesitamos 
  // que este recupere
  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`}
          alt={`Image extracted using the first three word of ${fact}`}
        />
      )}
    </main>
  );
}
