import { FC } from "react"
import footer from '../../assets/footer.svg'
import './footer.scss'

const Footer: FC = () => {
    return (
        <footer className="footer">
            <div className="container1">
                <h3 className="footer__title">наши бренды</h3>
                <div className="footer__line"></div>
                <div className="footer__cards">
                    <img src={footer} alt="" />
                    <img src={footer} alt="" />
                    <img src={footer} alt="" />
                    <img src={footer} alt="" />
                </div>
            </div>
        </footer>
    )
}

export default Footer