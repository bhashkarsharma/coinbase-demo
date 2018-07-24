import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import Config from '../config'

export class ProductOverview extends Component {

    constructor() {
        super()
        this.state = { products: [], loadingStatus: '' }
    }

    componentDidMount() {
        axios.get(`${Config.API_DOMAIN}/products`)
            .then(resp => this.setState({ products: resp.data }))
            .catch(err => this.setState({ loadingStatus: 'error' }))
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Product Overview</h2>
                { this.state.products.length ?
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Display Name</th>
                                <th>Base Currency</th>
                                <th>Quote Currency</th>
                                <th>Base min size</th>
                                <th>Base max size</th>
                                <th>Quote increment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.products.map((product, key) => {
                                    return <tr key={key}>
                                        <td><Link to={`/stats/${product.id}`}>{product.display_name}</Link></td>
                                        <td>{product.base_currency}</td>
                                        <td>{product.quote_currency}</td>
                                        <td>{product.base_min_size}</td>
                                        <td>{product.base_max_size}</td>
                                        <td>{product.quote_increment}</td>
                                    </tr>
                                })
                            }
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

export default withRouter(ProductOverview)