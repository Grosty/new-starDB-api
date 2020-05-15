//  https://swapi.dev

export default class SwapiService {

    _apiBase = 'https://swapi.dev/api';

    async getResource (url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Не можкм получить ${this._apiBase}${url}, статус ${res.status}`);
        }
        return await res.json();
    }

    async getAllPeople () {
        const res = await this.getResource(`/people/`);
        return res.results
    }

    getPerson (id) {
        return this.getResource(`/people/${id}`);
    }

    async getAllPlanets () {
        const res = await this.getResource(`/planets/`);
        return res.results.map((planet) => {
            return this._transformPlanet(planet);
        });
    }

    async getPlanet(id) {
        const planet = await this.getResource(`/planets/${id}`);
        return this._transformPlanet(planet);
    }

    async getAllStarships () {
        const res = await this.getResource(`/starships/`);
        return res.results
    }

    getStarship (id) {
        return this.getResource(`/starships/${id}`);
    }

    _extractId (item) {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    _transformPlanet (planet) {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }

    _transformPerson (person) {
        return {
            id: this._extractId(person),
            name: person.name,
            population: person.population,
            rotationPeriod: person.rotation_period,
            diameter: person.diameter
        }
    }

    _transformStarship (planet) {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }

}

