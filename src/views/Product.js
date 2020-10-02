import React from 'react';
import {useParams} from 'react-router-dom';
import Loader from '../components/Loader';
import { useAxiosGet } from '../hooks/HttpRequests';

function Product() {
    const {id} = useParams();
    const url = `https://5f751ebf1cf3c900161cdccc.mockapi.io/products/${id}`;
    
    let product = useAxiosGet(url);
    let content = null;

    if(product.error)
    {
        content = <p>No Data Found!</p>
    }

    if(product.loading)
    {
       content = <Loader />
    }

    if(product.data)
    {
        content =
        <div>
            <h1 className="font-bold text-2xl mb-3">{product.data.name}</h1>
            <div>
                <img src={product.data.image[0].image_url} alt={product.data.name} />
            </div>
            <div className="font-bold text-xl mb-3">
                $ {product.data.price}
            </div>
            <div>
                {product.data.description}
            </div>
        </div>
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default Product