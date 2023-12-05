import React, {Component} from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button';
import ErrorIndicator from "../error-indicator";
import './app.css';
import Row from "../row/row";
import PeoplePage from "../people-page";
import ItemList from "../item-list";
import ItemDetails, {Record} from "../item-details/item-details";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import {PersonList, PlanetList, StarshipList, PersonDetails, StarshipDetails, PlanetDetails} from "../sw-components";


export default class App extends Component{
    swapiService = new SwapiService();

    state = {
        showRandomPlanet: true,
    };
    toggleRandomPlanet = () => {
        this.setState((state)=> {
            return { showRandomPlanet: !state.showRandomPlanet }
        })
    };
    componentDidCatch() {
        this.setState({ hasError: true });
    }
    render() {
        if(this.state.hasError) return <ErrorIndicator />;
        const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

        const starshipDetails = <ItemDetails
            itemId={5}
            getData={getStarship}
            getImageUrl={getStarshipImage}
        >
            <Record field="model" label="Model"/>
            <Record field="length" label="Length"/>
            <Record field="costInCredits" label="Cost"/>
        </ItemDetails>;

        return (
            <ErrorBoundry>
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-12">
                        <Header/>
                    </div>
                </div>


                <PersonDetails itemId={11} />
                    <StarshipDetails itemId={5} />
                    <PlanetDetails itemId={9} />

                    <PersonList>
                        { ({name}) => <span>{name}</span> }
                    </PersonList>

                    <StarshipList>
                        { ({name}) => <span>{name}</span> }
                    </StarshipList>

                    <PlanetList>
                        { ({name}) => <span>{name}</span> }
                    </PlanetList>
            </div>
        </ErrorBoundry>
        );
    }
};