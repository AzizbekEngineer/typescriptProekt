import axios from 'axios'
import { FC, useEffect, useState } from 'react'
import './product.scss'

interface productSchema {
    id: number,
    price: number,
    title: string,
    images: string[],
}

const API_URL: string = 'https://dummyjson.com'

const Product: FC = () => {
    const [products, setProducts] = useState<productSchema[] | null>(null)

    useEffect(() => {
        axios
            .get(`${API_URL}/products`, { params: { limit: 8 } })
            .then(res => setProducts(res.data.products))
            .catch(err => console.log(err))
    }, [])

    let productItems: JSX.Element[] | undefined = products?.map((product: productSchema): JSX.Element => (
        <div className='product' key={product.id}>
            <div className="product__img">
                <img src={product.images[0]} width={100} height={100} alt="" />
            </div>
            <h3 className='product__title'>{product.title}</h3>
            <p className='product__price'>{product.price}</p>
        </div>
    ))

    return (
        <>
            <div className="product">
                <h2 className="product__name">новые поступления</h2>
                <div className="product__line"></div>
                <div className="container1">
                    <div className="product__cards">
                        {productItems}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product