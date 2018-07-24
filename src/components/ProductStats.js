import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Config from '../config'

export default class ProductStats extends Component {

    constructor() {
        super()
        this.state = { id: '', stats: {}, loadingStatus: '' }
    }

    componentDidMount() {
        const { id } = this.props.match.params
        axios.get(`${Config.API_DOMAIN}/products/${id}/stats`)
            .then(resp => this.setState({ id, stats: resp.data }))
            .catch(err => this.setState({ loadingStatus: 'error' }))
    }

    render() {
        const { open, high, low, volume, last, volume_30day } = this.state.stats
        return (
            <div>
                <Link to="/"><div className="float-left">&laquo; Back</div></Link>
                <h2 className="text-center">{this.state.id} Stats</h2>
                { Object.keys(this.state.stats).length ?
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
                    </table> :
                    <div className={'text-center m-2 p-2 ' + (this.state.loadingStatus === 'error' ? 'bg-danger' : 'bg-info') }>
                        { this.state.loadingStatus === 'error' ?
                            <span>There was an error loading data.</span> : 
                            <span>Loading...</span>
                        }
                    </div>
                }
            </div>
        )
    }

}