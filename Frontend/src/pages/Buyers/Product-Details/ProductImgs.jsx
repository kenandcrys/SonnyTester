import { useState, useEffect } from "react";

const ProductImgs = () => {
    const [dummyProduct, setDummyProduct] = useState([
        {
            img: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
            price: 25.99,
            description: "lorem ipsum ",
            ratings: 4.7,
            sold: 4788,
        },
        {
            img: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
            price: 24.99,
            description: "lorem ipsum ",
            ratings: 4.6,
            sold: 4788,
        },
        {
            img: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
            price: 23.99,
            description: "lorem ipsum ",
            ratings: 4.5,
            sold: 4788,
        },
        {
            img: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
            price: 22.99,
            description: "lorem ipsum ",
            ratings: 4.4,
            sold: 4788,
        },
        {
            img: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
            price: 21.99,
            description: "lorem ipsum ",
            ratings: 4.4,
            sold: 4788,
        },
        {
            img: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
            price: 20.99,
            description: "lorem ipsum ",
            ratings: 4.3,
            sold: 4788,
        },
        {
            img: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
            price: 19.99,
            description: "lorem ipsum ",
            ratings: 4.2,
            sold: 4788,
        },
    ]);

    const [dummyProductImgs, setDummyProductImgs] = useState([
        {
            img: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
        },
        {
            img: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
        },
        {
            img: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
        },
        {
            img: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
        },
        {
            img: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
        },
        {
            img: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
        },
        {
            img: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
        },
        {
            img: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
        },
        {
            img: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
        },
    ]);
    const [copyDummyImgs, setCopyDummyImgs] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [totalSlides, setTotalSlides] = useState(0);
    // slider trigger btns state for product imgs
    const [isPreviousSlide, setIsPreviousSlide] = useState(true);
    const [isNextSlide, setIsNextSlideImgs] = useState(false);

    useEffect(() => {
        const copy = dummyProductImgs.slice(0, 5);
        const totalSlides = Math.ceil(dummyProductImgs.length / 5);
        setCopyDummyImgs(copy);
        setTotalSlides(totalSlides);
    }, []);

    const slideController = (slideIndex) => {
        onChangeSlide(slideIndex);
        if (slideIndex < 1) {
            setIsPreviousSlide(true);
        } else {
            setIsPreviousSlide(false);
        }
        if (slideIndex + 1 < totalSlides) {
            setIsNextSlideImgs(false);
        } else {
            setIsNextSlideImgs(true);
        }
    };

    const onChangeSlide = (slideIndex) => {
        const startIndex = slideIndex * 5;
        let endIndex = startIndex + 5;
        if (endIndex > dummyProductImgs) {
            endIndex = dummyProductImgs;
        }
        const newResult = dummyProductImgs.slice(startIndex, endIndex);
        setCopyDummyImgs(newResult);
        setCurrentSlide(slideIndex);
    };

    const dummyImgsComp = copyDummyImgs.map((product, index) => {
        return (
            <div
                key={index}
                style={{ width: "10%", marginRight: "2%" }}
            >
                <img src={product.img} />
            </div>
        );
    });
    return (
        <div style={{ width: "100%" }}>
            <div id="product-image">
                <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" />
            </div>
            <div style={{ width: "100%", marginTop: "2rem", display: "flex" }}>
                <div style={{ margin: "auto 1.25rem" }}>
                    <button
                        type="button"
                        disabled={isPreviousSlide}
                        onClick={() => {
                            slideController(currentSlide - 1, false);
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            dataSlot="icon"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 19.5 8.25 12l7.5-7.5"
                            />
                        </svg>
                    </button>
                </div>
                {dummyImgsComp}
                <div style={{ margin: "auto 1.25rem" }}>
                    <button
                        type="button"
                        disabled={isNextSlide}
                        onClick={() => {
                            slideController(currentSlide + 1, false), false;
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            dataSlot="icon"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m8.25 4.5 7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductImgs;
