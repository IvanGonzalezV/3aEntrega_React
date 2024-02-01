import { useState, useEffect } from "react";
import { db } from "../../firebase/firebaseConfig";
import { query, collection, getDocs } from "firebase/firestore";

const CategoriesPage = () => {
    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
            const q = query(collection(db, "Products"));
            const querySnapshot = await getDocs(q);
            const docs = [];
            querySnapshot.forEach((doc) => {
                // console.log(doc.id, " => ", doc.data());
                docs.push({ ...doc.data(), id: doc.id });
            });
            console.log(docs);
            setProductsData(docs);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };
        getProducts();
    }, []);

    return (
        <div className="categoriesPage">
            <h1>CategoriesPage</h1>
        </div>
    )
};

export default CategoriesPage