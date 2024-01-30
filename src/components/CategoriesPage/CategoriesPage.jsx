import { useState, useEffect } from "react";
import { db } from "../../firebase/firebaseConfig";
import { query, collection, getDocs } from "firebase/firestore";

const CategoriesPage = () => {
    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const q = query(collection(db, "Products"));
            const querySnapshot = await getDocs(q);
            console.log(querySnapshot)
        }

        getProducts();
    }, []);

    return (
        <div className="categoriesPage">
            <h1>CategoriesPage</h1>
        </div>
    )
};

export default CategoriesPage