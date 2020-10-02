import React from 'react';
import Loader from '../components/Loader';
import ProductCard from '../components/ProductCard';
import {useAxiosGet} from '../hooks/HttpRequests';

function Home() {
    const url = `https://5f751ebf1cf3c900161cdccc.mockapi.io/products/?page=1&limit=10`;

    let products = useAxiosGet(url);

    let content = null;

    if(products.error)
    {
        content = <p>No Data Found!</p>
    }

    if(products.loading)
    {
       content = <Loader />
    }

    if(products.data)
    {
        content =
        products.data.map((product) => 
            <div key={product.id}>
                <ProductCard product={product} />
            </div>
        )
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default Home;