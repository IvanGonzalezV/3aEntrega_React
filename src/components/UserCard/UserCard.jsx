import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const UserCardComponent = (props) => {
    const handleAddToCartClick = () => {
        // Manejar la acción de agregar al carrito aquí
        console.log('Agregado al carrito');
    };

    return (
        <Card sx={{ maxWidth: 345, position: 'relative' }}>
            <CardActionArea onClick={handleAddToCartClick}>
                <CardMedia
                    component="img"
                    image={props.img}
                    alt={props.name}
                />
                {/* Agrega el icono de carrito de compras aquí */}
                <div style={{ position: 'absolute', bottom: 5, right: 5 }}>
                    <AddShoppingCartIcon sx={{ color: 'primary.main' }} />
                </div>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.name}
                    </Typography>
                    <Typography variant="h6" color="text.secondary" component="div">
                        {props.offer}
                    </Typography>
                    <div style={{ marginTop: "20px" }}>
                        <Typography
                            variant="caption"
                            color="text.secondary"
                        >
                            {props.date}
                        </Typography>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default UserCardComponent;
