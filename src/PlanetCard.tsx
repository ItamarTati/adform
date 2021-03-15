import React, { useState, useEffect } from 'react';
import { Planet } from './PlanetInterface';
import { background } from './Background';


export default function PlanetCard(props: Planet) {
  const [counter, setCounter] = useState(0);
  useEffect(
    () => {
      const id = setTimeout(() => {
        setCounter(counter + 1);
        if (counter === background.length - 1) {
          setCounter(0)
        }
        document.body.style.background = background[counter]
        document.body.style.backgroundAttachment = 'fixed'


      }, 7000);
      return () => {
        clearTimeout(id);
      };
    },
    [counter],
  );

  return (

    <div className="card mustafar active">
      <header className="bg-image">
        <img src={props.name.toLowerCase() === 'mustafar' ||
          props.name.toLowerCase() === 'tatooine' ||
          props.name.toLowerCase() === 'coruscant' ||
          props.name.toLowerCase() === 'utapau' ?
          `https://fwbmatch.fra1.digitaloceanspaces.com/starwars/${props.name.toLowerCase()}.png` :
          'https://static.wikia.nocookie.net/starwars/images/4/4a/Alderaan.jpg/revision/latest?cb=20061211013805'}
          alt={props.name} />
      </header>
      <main>
        <div className="level">Population: {props.population === null ? 'unknown' : props.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
        <div className="name">{props.name}</div>
        <p className="p-mustafar">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.</p>
      </main>
      <footer>
        <div className="left">
          <div className="title">Climates:</div>
          <div className="content">{props.climates.map(climate => <p>{climate}</p>)} </div>
        </div>
        <div className="middle">
          <div className="title">Diameter:</div>
          <div className="content">{props.diameter === null ? 'unknown' : props.diameter}</div>
        </div>
        <div className="right">
          <div className="title">Gravity:</div>
          <div className="content">{props.gravity}</div>
        </div>
      </footer>
    </div>
  )
}

