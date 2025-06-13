import mobileImg from "../assets/images/background-pattern-mobile.svg";
import desktopImg from "../assets/images/background-pattern-desktop.svg";

const Header = () => {
    return (
        <header>
            <picture>
                <source srcSet={mobileImg} media="(max-width: 767px)" />

                <source srcSet={desktopImg} media="(min-width: 768px)" />
                <img
                    className="w-full"
                    src={desktopImg}
                    alt="Background Pattern"
                />
            </picture>
        </header>
    );
};

export default Header;
