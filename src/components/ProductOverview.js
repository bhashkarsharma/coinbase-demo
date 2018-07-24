import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Config from '../config'

export default class ProductOverview extends Component {

    constructor() {
        super()
        this.state = { products: [] }
    }

    componentDidMount() {
        axios.get(`${Config.API_DOMAIN}/products`)
            .then(resp => this.setState({ products: resp.data }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Product Overview</h2>
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
                                return <tr key={key} className={status}>
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
                </table>
            </div>
        )
    }

}