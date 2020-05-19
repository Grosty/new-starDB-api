import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet
    from '../random-planet';
import ErrorBoundry
    from '../error-boundry';

import ItemDetails, {Record} from "../item-details/item-details";
import SwapiService
    from "../../services/swapi-service";

import {SwapiServiceProvider} from "../swapi-service-context";

import {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
    PersonList,
    PlanetList,
    StarshipList
} from '../sw-components';

import './app.css';

export default class App extends Component {



    state = {
        showRandomPlanet: true,
        swapiService: new SwapiService()
    };

    onServiceChange = () => {
        console.log(this.state.swapiService)
    };

    render() {

        const planet = this.state.showRandomPlanet ?
            <RandomPlanet/> :
            null;

        const {
            getPerson,
            getStarship,
            getPersonImage,
            getStarshipImage
        } = this.state.swapiService;

        const personDetails = (
            <ItemDetails
                itemId={11}
                getData={getPerson}
                getImageUrl={getPersonImage}>

                <Record field="gender"
                        label="Gender"/>
                <Record field="eyeColor"
                        label="Eye Color"/>

            </ItemDetails>
        );

        return (
            <ErrorBoundry>
                <SwapiServiceProvider
                    value={this.state.swapiService}>

                    <div
                        className="stardb-app">

                        <Header onServiceChange={this.onServiceChange} />

                        {planet}

                        <PersonDetails
                            itemId={11}/>

                        <PlanetDetails
                            itemId={5}/>

                        <StarshipDetails
                            itemId={9}/>

                        <PersonList/>

                        <StarshipList/>

                        <PlanetList/>

                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}
