import { useState, useEffect } from "react";
import { db } from "../../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const CategoriesPage = () => {
    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productsCollection = collection(db, "yourCollectionName"); // Reemplaza "yourCollectionName" con el nombre de tu colección en Firestore
                const productsSnapshot = await getDocs(productsCollection);
                const productsList = productsSnapshot.docs.map((doc) => doc.data());
                setProductsData(productsList);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {/* Renderiza o utiliza los datos obtenidos según sea necesario */}
            {productsData.map((product) => (
                <div key={product.id}>{/* Renderiza información del producto */}</div>
            ))}
        </div>
    );
};

export default CategoriesPage;
