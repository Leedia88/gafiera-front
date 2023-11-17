import {useEffect, useState} from 'react';

import { CarouselEvents } from './components/CarouselEvents';
import { ExploreEvents } from './components/ExploreEvents';

export default function HomePage(props) {

    return(
        <>
            <ExploreEvents />
            <CarouselEvents events={props.events}/>
        </>
    )
}