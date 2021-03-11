import React, { Component } from 'react';

class CallApi extends Component {
    state = { products:[]}

    componentDidMount = ()=>{
        fetch("http://127.0.0.1:5000/api/products")
            .then(res => res.json())
            .then(data => {
                this.setState({products: data.data});
                console.log(this.state.products);
            })
            .catch(error => console.log(error));
        
    }

    render() { 
        const { products } = this.state;

        return (
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                </tr>
                </thead>
                <tbody>

                { products.map( product => (
                    <tr>
                    <td>
                        { product.id }
                    </td>
                    <td>
                        { product.productName}
                    </td>
                    <td>
                        { product.precio }
                    </td>
                </tr>
                )) }
                </tbody>
            </table>

           );
    }
}
 
export default CallApi;