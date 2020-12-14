import {API_KEY, clientAxios} from "../axios";

export const GET_FORECAST_START = 'GET_FORECAST_START'
export const GET_FORECAST_SUCCESS = 'GET_FORECAST_SUCCESS'
export const GET_FORECAST_CLEAR = 'GET_FORECAST_CLEAR'
export const GET_FORECAST_ERR = 'GET_FORECAST_ERR'


export const getForecastStart = () => {
    return {
        type: GET_FORECAST_START
    }
}

export const getForecastSuccess = (payload) => {
    return {
        type: GET_FORECAST_SUCCESS,
        payload
    }
}

export const getForecastClear = () => {
    return {
        type: GET_FORECAST_CLEAR
    }
}

export const getForecastErr = (payload) => {
    return {
        type: GET_FORECAST_ERR,
        payload
    }
}

export const getForecast = (city) => {
    return async dispatch => {
        try {
            dispatch(getForecastStart)
            const res = await clientAxios.get(`/forecast?q=${city}&appid=${API_KEY}`)
            if (res.status === 200) {
                dispatch(getForecastSuccess(res.data))
            }
        } catch (e) {
            dispatch(getForecastErr(e?.response?.status))
        }
    }
}