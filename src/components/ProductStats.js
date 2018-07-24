import React, { Component } from 'react'
import axios from 'axios'
import Config from '../config'

export default class ProductStats extends Component {

    constructor() {
        super()
        this.state = { id: '', stats: [] }
    }

    componentDidMount() {
        const { id } = this.props.match.params
        axios.get(`${Config.API_DOMAIN}/products/${id}/stats`)
            .then(resp => this.setState({ id, stats: resp.data }))
            .catch(err => console.log(err))
    }

    render() {
        const { open, high, low, volume, last, volume_30day } = this.state.stats
        return (
            <div>
                <h2 className="text-center">{this.state.id} Stats</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Open</th>
                            <th>High</th>
                            <th>Low</th>
                            <th>Volume</th>
                            <th>Last</th>
                            <th>30 day volume</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{open}</td>
                            <td>{high}</td>
                            <td>{low}</td>
                            <td>{volume}</td>
                            <td>{last}</td>
                            <td>{volume_30day}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

}