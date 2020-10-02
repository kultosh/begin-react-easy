import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {useParams} from 'react-router-dom';
import Loader from '../components/Loader';

function Product() {
    const {id} = useParams();
    const url = `https://5f751ebf1cf3c900161cdccc.mockapi.io/products/${id}`;
    const [product, setProduct] = useState({
        loading: false,
        data: null,
        error: null
    });
    let content = null;
    
    useEffect(() => {
        setProduct(({
            loading: true,
            data: null,
            error: null
        }))
        Axios.get(url)
        .then(response => {
            setProduct({
                loading: false,
                data: response.data,
                error: null
            })
        })
        .catch(() => {
                setProduct({
                    loading: false,
                    data: null,
                    error: true
                })
        })
    }, [url]);

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