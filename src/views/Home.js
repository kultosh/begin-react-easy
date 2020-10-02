import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Loader from '../components/Loader';
import ProductCard from '../components/ProductCard';

function Home() {
    const url = `https://5f751ebf1cf3c900161cdccc.mockapi.io/products/?page=1&limit=10`;
    const [products, setProducts] = useState({
        loading: false,
        data: null,
        error: false
    });
    let content = null;
    
    useEffect(() => {
        setProducts(({
            loading: true,
            data: null,
            error: false
        }))
        Axios.get(url)
        .then(response => {
            setProducts({
                loading: false,
                data: response.data,
                error: false
            })
        })
        .catch(() => {
                setProducts({
                    loading: false,
                    data: null,
                    error: true
                })
        })
    }, [url]);

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