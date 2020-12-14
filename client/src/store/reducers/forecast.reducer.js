import * as forecastActions from '../actions/forecast.actions'

const initState = {
    forecast: null,
    loading: false,
    err: null
};

const foreCastReducer = (state = initState, action) => {
    switch (action.type) {
        case forecastActions.GET_FORECAST_START:
            return {...state, loading: true};
        case forecastActions.GET_FORECAST_SUCCESS:
            return {...state, loading: false, forecast: action.payload, err: null};
        case forecastActions.GET_FORECAST_ERR:
            return {...state, ...{loading: false, err: action.payload, forecast: null}};
        case forecastActions.GET_FORECAST_CLEAR:
            return initState;
        default:
            return state;
    }
}

export default foreCastReducer;