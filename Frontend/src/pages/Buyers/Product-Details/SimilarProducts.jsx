import { useState, useEffect } from "react";

const SimilarProducts = () => {
    const [similarProducts, setSimilarProducts] = useState([
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
    const [similarProductsCopy, setSimilarProductsCopy] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [totalSlides, setTotalSlides] = useState(0);
    // similar products slider trigger btns state
    const [isPreviousSlide, setIsPreviousSlide] = useState(true);
    const [isNextSlide, setIsNextSlideSimilarProducts] = useState(false);

    useEffect(() => {
        const copy = similarProducts.slice(0, 5); //only show 5 products at a time
        const totalSlides = Math.ceil(similarProducts.length / 5);
        setSimilarProductsCopy(copy);
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
            setIsNextSlideSimilarProducts(false);
        } else {
            setIsNextSlideSimilarProducts(true);
        }
    };

    const onChangeSlide = (slideIndex) => {
        const startIndex = slideIndex * 5;
        let endIndex = startIndex + 5;
        if (endIndex > similarProducts.length) {
            endIndex = similarProducts.length;
        }
        const newResult = similarProducts.slice(startIndex, endIndex);
        setCurrentSlide(slideIndex);
        setSimilarProductsCopy(newResult);
    };

    const similarProductsComp = similarProductsCopy.map((product, index) => {
        return (
            <div
                style={{
                    width: "15%",
                    height: "auto",
                }}
                key={index}
            >
                <div>
                    <img src={product.img} />
                </div>
                <div>
                    <div style={{ margin: "10px auto" }}>
                        <p style={{ fontSize: "1.25rem" }}>${product.price}</p>
                    </div>
                    <div>
                        <p>{product.description}</p>
                    </div>
                    <div style={{ display: "flex" }}>
                        <span style={{ fontSize: ".75rem" }}>{product.sold} sold</span>
                        <div
                            className="flex items-center"
                            style={{ marginLeft: "5px", marginRight: "5px" }}
                        >
                            <svg
                                className="w-3 h-3 text-yellow-300 me-1"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                            >
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                        </div>
                        <span style={{ fontSize: ".75rem" }}>{product.ratings}</span>
                    </div>
                    <div>
                        <span>Free shipping</span>
                    </div>
                </div>
            </div>
        );
    });

    return (
        //  {/* Similar Products slide show */}

        <div
            id="similar-products-div"
            style={{ width: "100%", height: "auto", margin: "10% auto" }}
        >
            <div style={{ width: "100%", height: "auto", margin: "5% auto" }}>
                <p style={{ fontSize: "2rem" }}>You may also like</p>
            </div>

            {/* Similar product items list */}
            <div style={{ display: "flex" }}>
                <div style={{ margin: "auto 25px" }}>
                    <button
                        type="button"
                        disabled={isPreviousSlide}
                        onClick={() => {
                            slideController(currentSlide - 1, true);
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
                <div
                    style={{
                        width: "100%",
                        height: "auto",
                        display: "flex",
                        justifyContent: "space-evenly",
                    }}
                >
                    {similarProductsComp}
                </div>
                <div style={{ margin: "auto 25px" }}>
                    <button
                        type="button"
                        disabled={isNextSlide}
                        onClick={() => {
                            slideController(currentSlide + 1, true);
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

export default SimilarProducts;
