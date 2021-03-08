import React from 'react';
import {connect} from 'react-redux';

import Favorites from './favorites/favorites';
import Roots from './roots/roots';
//import {buttonGetComplete, getPrimeButtons} from '../../../actions/index';

class Home extends React.Component{
    render(){
        return(
            <div>
                <Roots/>
                <Favorites/>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch, state){
    return{
    }
}

function mapStateToProps(state){
    return{
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);