import React, { useState, useEffect } from 'react';
import SearchName from './SearchName'
import FilterPopulation from './FilterPopulation'
import PlanetCard from './PlanetCard'


interface data {
  name: string,
  population: number,
  gravity: string,
  diameter: number,
  climates: string[]
}

export default function App() {
  let [planets, setPlanets] = useState<data[]>([])
  let [min, setMin] = useState<number>(0)
  let [max, setMax] = useState<number>(100)
  let [searchString, setSearchString] = useState<string>('')

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
    <input type ='text' onChange={event => setSearchString(event.target.value)}/>
    {console.log(FilterPopulation(min, max, planets))}
    {console.log(SearchName(searchString, FilterPopulation(min, max, planets)))}
    {planets.map((planet) => <li>{planet.name} with a population of {planet.population}</li>)} 
    </div>)
}


