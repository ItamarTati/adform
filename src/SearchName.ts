import { Planet } from './PlanetInterface';

export default function SearchName(searchString: string, planets: Planet[]): Planet[] {
    var pattern = new RegExp(searchString.toLowerCase());
    return planets.filter((planet) => pattern.test(planet.name.toLowerCase()))
}