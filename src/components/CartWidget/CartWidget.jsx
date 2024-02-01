import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = ({ itemCount }) => {
    return (
        <div>
            <ShoppingCartIcon fontSize="large" />
            {itemCount > 0 && <span>{itemCount}</span>}
        </div>
    );
};

export default CartWidget;
