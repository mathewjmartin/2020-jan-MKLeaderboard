import React, { Component } from 'react';
import MainContent from "../MainContent/MainContent";
import RacerCard from '../RacerCard/RacerCard';

import './RacersPage.css';

class RacersPage extends Component {
    render() {
        return (
            <div className='racersContent'>
                <h1>Racers</h1>
                <MainContent/>
                <RacerCard/>
            </div>
        );
    }
}

export default RacersPage;