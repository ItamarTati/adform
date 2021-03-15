import { Planet } from './PlanetInterface';


export default function FilterPopulation(min: number, max: number, planets: Planet[]): Planet[]{
    return planets.filter((planet) => planet.population <= max && planet.population >= min && planet.population !== null)
}