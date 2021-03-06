import { useState, useEffect } from 'react';
import axios from 'axios';

import LoadImage from './img/giphy.webp';
import LogoRick from './img/logo.png';

export default function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoad] = useState(true);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then(
      response => {
        setData(response.data.results);
        setTimeout(() => {
          setIsLoad(false);
        }, 500)
      }
    )
  }, []);

  if (isLoading) {
    return (
      <div>
        <img src={LoadImage} alt="loading" />
      </div>
    )
  }

  return (
    <div className="content">
      <div className="container">

        <div className="logo-content">
          <img src={LogoRick} alt="Logo" height="100%" width="auto" />
        </div>
        <div className="cards-content">
          {data.map((item, index) => (
            <div key={index} className="card">
              <img src={item.image} alt={item.name} width='180px' height="auto" />
              <h4> {item.name} </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


