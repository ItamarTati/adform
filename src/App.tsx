import React, { useState, useEffect } from 'react';
import SearchName from './SearchName'
import FilterPopulation from './FilterPopulation'
import PlanetCard from './PlanetCard'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

interface data {
  name: string,
  population: number,
  gravity: string,
  diameter: number,
  climates: string[]
}

export default function App() {
  let [planets, setPlanets] = useState<data[]>([])
  let [moreKnown, setMoreKnown] = useState<Boolean>(false)
  let [moreUnknown, setMoreUnknown] = useState<Boolean>(false)
  let [min, setMin] = useState<number>(0)
  let [max, setMax] = useState<number>(100000000000000)
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

  return (
    <div >
      <form className='search'>
        <TextField label="Search for a Planet" type="search" onChange={event => setSearchString(event.target.value)} />
        <TextField
          label="Minimum"
          type="number"
          value={min}
          onChange={event => setMin(parseInt(event.target.value))}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="Maximum"
          type="number"
          value={max}
          onChange={event => setMax(parseInt(event.target.value))}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>


      <div className="flying-objects">
        <img id="flying-object-02" src="https://fwbmatch.fra1.digitaloceanspaces.com/starwars/cloud-02.png" alt='cloud 1'/>
        <img id="flying-object-01" src="https://fwbmatch.fra1.digitaloceanspaces.com/starwars/cloud-01.png" alt='cloud 2'/>
      </div>

      <h1>There are {SearchName(searchString, FilterPopulation(min, max, planets)).length} Planets with known populations with your Parameters</h1>
      <div className="cards">
        {SearchName(searchString, FilterPopulation(min, max, planets))
          .map((planet) => <PlanetCard             
          name = {planet.name} 
          population  = {planet.population} 
          gravity  = {planet.gravity} 
          diameter  = {planet.diameter} 
          climates  = {planet.climates} 
          />)
          .splice(0, moreKnown === true ? planets.length : 2)}

      </div>
      <div className='button'>
        {(SearchName(searchString, FilterPopulation(min, max, planets)).length > 2) ? 
        <Button
          className='button'
          variant="contained"
          color="secondary"
          onClick={event =>
            setMoreKnown(!moreKnown)}>Show {moreKnown === true ? 'Less' : `${SearchName(searchString, FilterPopulation(min, max, planets)).length - 2} More Planets`}
        </Button> : ''}
      </div>

      <h1>There are {SearchName(searchString, planets.filter((planet) => planet.population === null)).length} Planets with unknown populations with your Parameters</h1>
      <div className="cards">
        {SearchName(searchString, planets
          .filter((planet) => planet.population === null))
          .map((planet) => <PlanetCard           
          name = {planet.name} 
          population  = {planet.population} 
          gravity  = {planet.gravity} 
          diameter  = {planet.diameter} 
          climates  = {planet.climates} 
          />)
          .splice(0, moreUnknown === true ? planets.length : 2)}
      </div>
      <div className='button'>
        {SearchName(searchString, planets.filter((planet) => planet.population === null)).length > 2 ? 
        <Button
          className='button'
          variant="contained"
          color="secondary"
          onClick={event =>
            setMoreUnknown(!moreUnknown)}>Show {moreUnknown === true ? 'Less' : `${SearchName(searchString, planets
              .filter((planet) => planet.population === null)).length - 2} More Planets`}
        </Button> : ''}
      </div>

    </div>
  )
}