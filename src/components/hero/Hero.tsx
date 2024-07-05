import { FC } from "react"
import './hero.scss'

const Hero: FC = () => {
    return (
        <div className="hero">
            <div className="container hero__container">
                <div className="hero__box">
                    <h2 className="hero__title">PORTEN</h2>
                    <div className="hero__line"></div>
                    <h3 className="hero__name">санкт-петербург</h3>
                </div>
                <p className="hero__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus interdum purus, est tortor pulvinar ut in. Fringilla a diam enim sed justo, sed iaculis sagittis. Tortor id eu interdum nec ut iaculis. Penatibus ullamcorper ultricies morbi ipsum sem metus pharetra, mi. Tortor nibh magna feugiat id nunc, dui nisl viverra.</p>
            </div>
        </div>
    )
}

export default Hero