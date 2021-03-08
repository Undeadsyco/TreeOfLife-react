import React from 'react';
import Root from './root';
import './roots.css';
import Eubacteria from './Eubacteria.jpg';
import Eukaryotes from './Eukaryotes.jpg';
import Archaea from './Archaea.jpg';


const Roots =(props)=>{
    return(
        <section id="roots">
            <h2>Explore the tree starting from the roots.</h2>
            <div className="box1">
                <Root box="box1-1" group="Eubacteria" src={Eubacteria} 
                info="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua"/>
                <Root box="box1-2" group="Archaea" src={Archaea} 
                info="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua"/>
            </div>
            <div className="box2">
                <Root box="box2-1" group="Eukaryotes" src={Eukaryotes} 
                info="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua"/>
            </div>
        </section>
    );
};

export default Roots;