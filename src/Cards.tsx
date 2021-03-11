import React, { useState, useEffect } from 'react';
import PlanetCard from './PlanetCard'

interface data {
  name: string,
  population: number,
  gravity: string,
  diameter: number,
  climates: string[]
}

export default function Cards() {
  let [planets, setPlanets] = useState<data[]>([])
  
  useEffect(() => {
    fetch('https://swapi-gql-adform.herokuapp.com/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
      query {
        allPlanets  {
          planets {
            name 
            population
            gravity
            diameter
            climates
          }
        }
      }`
      }),
    })
      .then(res => res.json())
      .then(res => setPlanets(res.data.allPlanets.planets))
      .catch(error => console.log(error.message))
  }, []);
  return (<div> 
    {planets.map((planet) => <li>{planet.name}</li>)} 
    </div>)
}

