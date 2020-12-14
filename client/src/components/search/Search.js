import React from 'react';
import debounce from 'lodash.debounce'
import {connect} from "react-redux";
import {getForecast, getForecastClear} from "../../store/actions/forecast.actions";

const Search = (props) => {

    // const searchOnInputHandler = (e) => {
    //     const cityName = e.target.value;
    //     if (cityName.length > 1) {
    //         props.getForecastByCity(cityName)
    //     } else {
    //         props.clearForecast()
    //     }
    // }

    const submitHandler = (e) => {
        e.preventDefault()
        const cityName = e.currentTarget[0].value;
        props.getForecastByCity(cityName)

    }

    return <form onSubmit={submitHandler}>
        <input type="text"
               name={'searchField'}
               placeholder={'L\'viv'}
               defaultValue={''}/>
        <input type="submit" value="Search"/>
    </form>
};
const mapDispatchToProps = dispatch => {
    return {
        getForecastByCity: debounce((city) => dispatch(getForecast(city)), 300),
        clearForecast: () => dispatch(getForecastClear()),
    }
}

export default connect(null, mapDispatchToProps)(Search);