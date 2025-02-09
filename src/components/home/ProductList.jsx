import React, { useState, useEffect } from "react";
import ProductCard from "../product/ProductCard";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setFilteredProducts(data);
            });
    }, []);

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearch(value);
        const filtered = products.filter((product) =>
            product.title.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    return (
        <div>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={handleSearch}
                    className="p-2 border rounded w-full"
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
