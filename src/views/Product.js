import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {useParams} from 'react-router-dom';

function Product() {
    const {id} = useParams();
    const url = `https://5f751ebf1cf3c900161cdccc.mockapi.io/products/${id}`;
    const [product, setProduct] = useState(null);
    let content = null;
    
    useEffect(() => {
        Axios.get(url)
        .then(response => {
            setProduct(response.data);
        })
    }, [url]);

    if(product)
    {
        content =
        <div>
            <h1 className="font-bold text-2xl mb-3">{product.name}</h1>
            <div>
                <img src={product.image[0].image_url} alt={product.name} />
            </div>
            <div className="font-bold text-xl mb-3">
                $ {product.price}
            </div>
            <div>
                {product.description}
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