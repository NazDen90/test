import React from 'react';
import {connect} from "react-redux";
import {Bar, XAxis, YAxis} from "recharts";
import BarChart from "recharts/lib/chart/BarChart";

const Chart = (props) => {
        const {err, loading, forecast} = props
        if (err === 404) return <div> City not found</div>
        if (err) return <div>Err</div>
        if (loading) return <div>loading</div>
        if (!forecast) return <div/>
        const data = forecast.list.map(item => ({name: item.dt_txt, value: item.main.temp}))
        return <BarChart width={730} height={250} data={data}>
            <XAxis dataKey="name"/>
            <YAxis dataKey='value'/>
            <Bar dataKey='value' fill="#8884d8"/>
        </BarChart>
    }
;

const mapStateToProps = store => {
    return {
        err: store.foreCastReducer.err,
        loading: store.foreCastReducer.loading,
        forecast: store.foreCastReducer.forecast
    }
}

export default connect(mapStateToProps)(Chart);