import React from 'react';
import BtnBox from './btnBox';
//import BtnBox from './btnBox';
import './favorites.css';
import insects from './Insect.jpg';

const Favorites=({onAssignPrimeButtons, onAssignSecondButtons, primeButtons, secondButtons })=>{
    return(
        <section>
            <h2>Or explore the groups we all know and love.</h2>
            <div id="mainButtonBox" onLoad={onAssignPrimeButtons}>
                {primeButtons.map(primeBtn => (
                        <button 
                            key={primeBtn.id} 
                            onClick={this.getSecondButtons.bind(primeBtn.name)}
                        >{primeBtn.name}</button>
                    ))}
            </div>
            <div id="secondaryButtonBox">
                <BtnBox secondButtons={this.state.secondButtons}/>
            </div>
            <div id="displayBox">
                <div id="pictureBox">
                    <img src={insects} alt="" />
                </div>
                <div id="infoBox">
                    <p>
                        Lorem ipsum, dolor sit amet consectetur 
                        adipisicing elit. Eos repellendus nihil 
                        adipisci enim earum doloremque vero quibusdam 
                        numquam explicabo, voluptas exercitationem 
                        similique culpa maiores quae sequi laborum 
                        quidem velit est ratione? Tenetur laboriosam 
                        tempora quisquam delectus odio veniam ducimus 
                        ex et hic at. Odit eos doloribus quis cumque. 
                        Provident, numquam!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Favorites;