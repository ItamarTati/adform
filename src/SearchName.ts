interface data {
    name: string,
    population: number,
    gravity: string,
    diameter: number,
    climates: string[]
  }
export default function SearchName(searchString: string, planets: data[]): data[]{
    var pattern = new RegExp(searchString.toLowerCase());
    return planets.filter((planet) => pattern.test(planet.name.toLowerCase()))
}