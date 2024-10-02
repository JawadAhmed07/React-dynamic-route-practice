import axios, { all } from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./productcard";
import CategoryChip from "./categoryChips";

function Products() {

    const [products, setproducts] = useState([]);
    const [categories, setcategories] = useState([]);
    const [loading, setLoading] = useState(true)
    const [chosenCategory, setchosenCategory] = useState("All")

    useEffect(() => {
        // console.log("Use effect call ho gya")
        const url= 
        chosenCategory==="All" 
        ? "https://dummyjson.com/products"
        :`https://dummyjson.com/products/category/${chosenCategory}`;
        axios
        .get(url)
            .then((res) => {
                // console.log(res.data.products);
                setproducts(res.data.products)
                setLoading(false);
            })
            .catch((err) => console.log(err))
        setLoading(false);
    }, [chosenCategory])


    useEffect(() => {
        axios.get('https://dummyjson.com/products/categories')
            .then((res) => {
                setcategories(res.data)
                // console.log("categories=>", res);

                setLoading(false)
            })
            .catch((err) => console.log(err))
        setLoading(false)
    }, [])

    useEffect(() => {
        const url=chosenCategory === "All"
        ? 'https://dummyjson.com/products?sortBy=title&order=asc'
        : `https://dummyjson.com/products/category/${chosenCategory}?sortBy=title&order=asc`;

        axios.get(url)
           .then((res) => {
                // console.log(res.data);
                setproducts(res.data.products)
                setLoading(false);
            })
           .catch((err) => console.log(err))
        setLoading(false);
    }
    ,[chosenCategory]);



    return (
        <div className="container mx-auto">
            {loading ? (
                <h1 className="text-center text-3xl">Loading...</h1>
            ) : (
                <div>
                    <div className="flex gap-3 flex-wrap">
                    <CategoryChip 
                    onClick={()=>setchosenCategory("All")}
                    isChosen= {chosenCategory==="All" }
                    category={{
                        slug:"All",
                        name:"All"
                    }} />
                        {categories.map((category)=>(
                        <CategoryChip
                        onClick={()=>setchosenCategory(category.slug)}
                        isChosen={category.slug===chosenCategory}
                        category={category} key={category.slug} />))}
                    </div>

                    <div className="flex flex-wrap m-10 my-4">
                        {products.map((item) => (
                            <ProductCard key={item.id} item={item} />
                        ))};
                    </div>
                </div>
            )}
        </div>
    )

}

export default Products;
