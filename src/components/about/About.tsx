import { FC, useEffect, useState } from "react"
import axios from 'axios'

import './about.scss'
import '../product/product.scss'


interface productSchema {
    id: number,
    price: number,
    title: string,
    images: string[],
}

const API_URL: string = 'https://dummyjson.com'


const About: FC = () => {
    const [products, setProducts] = useState<productSchema[] | null>(null)

    useEffect(() => {
        axios
            .get(`${API_URL}/products`, { params: { limit: 3 } })
            .then(res => setProducts(res.data.products))
            .catch(err => console.log(err))
    }, [])

    let productItems: JSX.Element[] | undefined = products?.map((product: productSchema): JSX.Element => (
        <div className='product' key={product.id}>
            <div className="product__img">
                <img src={product.images[0]} alt="" />
            </div>
            <h3 className='product__title'>{product.title}</h3>
            <p className='product__price'>{product.price}</p>
        </div>
    ))
    return (
        <div className="about">
            <div className="container">
                <div className="about__top">
                    <div className="about__top__left">
                        <h3 className="about__top__title">СЕЗОН 2020/21</h3>
                        <div className="about__products">
                            {productItems}
                        </div>
                    </div>
                    <div className="about__top__right">
                        <h3 className="about__title">
                            Новая коллекция
                        </h3>
                        <div className="about__line"></div>
                        <h4 className="about__name">Каталог</h4>
                    </div>
                </div>
                <div className="about__bottom">
                    <div className="about__bottom__left">
                    </div>
                    <div className="about__bottom__right">
                        <h3 className="about__bottom__title">коллекция 2018</h3>
                        <div className="about__line"></div>
                        <p className="about__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non rutrum ornare ut mattis habitant dui arcu. Sagittis amet nunc ut neque quis nibh arcu. Vivamus vestibulum nisi et venenatis sed scelerisque magna consectetur. Amet convallis quis gravida facilisis vulputate. Faucibus facilisi habitasse ipsum interdum dictum aliquet. Velit quis ullamcorper pulvinar nulla malesuada integer. Aenean praesent viverra nulla nullam natoque volutpat curabitur auctor. Viverra viverra ullamcorper scelerisque risus dignissim egestas. Id aliquam a aliquam egestas leo orci pharetra sed diam. </p>
                        <h4 className="about__name">посмотреть коллекцию</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About