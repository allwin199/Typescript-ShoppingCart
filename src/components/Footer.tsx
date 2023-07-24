import useCart from "../hooks/useCart";

type FooterPropsType = {
    viewCart: boolean;
};

const Footer = ({ viewCart }: FooterPropsType) => {
    const { totalItems, totalPrice } = useCart();

    const year: number = new Date().getFullYear();

    const pageContent = viewCart ? (
        <p>Top Shop &copy; {year}</p>
    ) : (
        <>
            <p>Total Items: {totalItems}</p>
            <p>Total Price: {totalPrice}</p>
            <p>Top Shop &copy; {year}</p>
        </>
    );

    const content = <footer className="footer">{pageContent}</footer>;

    return content;
};

export default Footer;
