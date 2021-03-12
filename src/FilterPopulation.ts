interface data {
    name: string,
    population: number,
    gravity: string,
    diameter: number,
    climates: string[]
  }

export default function FilterPopulation(min: number, max: number, planets: data[]): data[]{
    return planets.filter((planet) => planet.population <= max && planet.population >= min)
}