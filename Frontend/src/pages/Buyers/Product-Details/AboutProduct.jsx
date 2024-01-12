const AboutProduct = () => {
    return (
        // {/* // Product features and specifications container */}
        <div>
            <div
                style={{
                    border: "1px solid black",
                    margin: "5% auto",
                    backgroundColor: "#f2f2f2",
                }}
            >
                {/* Product details div */}
                <div
                    id="product-description-div"
                    style={{ borderBottom: "1px solid black", padding: "1%" }}
                >
                    <p style={{ fontSize: "2rem" }}>Product Details</p>
                </div>
                {/* Product details in list div */}
                <ul
                    className="list-inside list-decimal"
                    id="details-list"
                    style={{ padding: "1.5rem" }}
                >
                    <li style={{ padding: "1rem .5rem" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur
                        semper nunc in molestie.
                    </li>
                    <li style={{ padding: "1rem .5rem" }}>
                        titor eu convallis sit amet, semper eget mauris. Integer in pulvinar mauris.
                        Donec facilisis placerat magna sed cursus. Mauris vel tristique arcu. Duis
                        congue orci id libero dictum sollicitudin. Curabitur dapibus arcu leo,
                        condimentum tempus augue condimentum sed. Aliquam sed auctor ex.
                    </li>
                    <li style={{ padding: "1rem .5rem" }}>
                        {" "}
                        Nunc quis neque non eros dictum scelerisque ut ac urna. Etiam vel felis
                        molestie, malesuada neque tempus, bibendum mauris. Nullam sit amet rhoncus
                        nisl. Quisque non vehicula dui. Vestibulum neque tortor, placerat sit amet
                        condimentum euismod, suscipit lobortis diam. Sed varius elit non erat
                        dignissim vulputate.
                    </li>
                    <li style={{ padding: "1rem .5rem" }}>
                        {" "}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur
                        semper nunc in molestie.
                    </li>
                    <li style={{ padding: "1rem .5rem" }}>
                        titor eu convallis sit amet, semper eget mauris. Integer in puLorem ipsum
                        dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in
                        molestie.Lorem ipsum dolor sit amet, consectetur adipiscing elit donec
                        consectetur semper nunc in molestie.
                    </li>
                    <li style={{ padding: "1rem .5rem" }}>
                        Nunc quis neque non eros dictum scelerisque ut ac urna. Etiam vel felis
                        molestie, malesuada neque tempus, bibendum mauris. Nullam sit amet rhoncus
                        nisl. Quisque non vehicula dui. Vestibulum neque tortor, placerat sit amet
                        condimentum euismod, suscipit lobortis diam. Sed varius elit non erat
                        dignissim vulputate.
                    </li>
                </ul>
            </div>
            {/* Product features and specs */}
            <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                {/* Product features div */}
                <div
                    style={{
                        width: "45%",
                        border: "1px solid black",
                        backgroundColor: "#f2f2f2",
                    }}
                >
                    <div style={{ borderBottom: "1px solid black", padding: "2%" }}>
                        <p style={{ fontSize: "1.5rem" }}>Key Features</p>
                    </div>
                    <div>
                        <ul
                            className="list-inside list-decimal"
                            style={{ padding: "1.5rem" }}
                        >
                            <li style={{ padding: "1rem .5rem" }}>Lorem ipsum</li>
                        </ul>
                    </div>
                </div>
                {/* Product specifications div */}
                <div
                    style={{
                        width: "45%",
                        border: "1px solid black",
                        backgroundColor: "#f2f2f2",
                    }}
                >
                    <div style={{ borderBottom: "1px solid black", padding: "2%" }}>
                        <p style={{ fontSize: "1.5rem" }}>Specifications</p>
                    </div>
                    <div style={{ padding: "1rem" }}>
                        <div>
                            <p
                                style={{
                                    padding: "1rem .5rem",
                                    fontSize: "1.25rem",
                                    fontWeight: "700",
                                }}
                            >
                                Size:
                            </p>
                        </div>
                        <div>
                            <p
                                style={{
                                    padding: "1rem .5rem",
                                    fontSize: "1.25rem",
                                    fontWeight: "700",
                                }}
                            >
                                Weight:
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutProduct;
