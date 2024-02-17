import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { ProductProps } from "./types";
import { FC, useContext, useState } from "react";
import { AddShoppingCart } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import { getClasses } from "./styles";
import { ShoppingCartContext } from "src/context/shoppingCartContext";

export const Product: FC<ProductProps> = ({
  id,
  name,
  price,
  inStockQuantity,
}) => {
  const theme = useTheme();
  const classes = getClasses(theme);
  const shoppingCart = useContext(ShoppingCartContext);

  const LOW_AMOUNT = 10;
  const [amount, setAmount] = useState(1);

  const addToShoppingCart = () => {
    // inStockQuantity -= amount;

    shoppingCart.push<any>({
      product: { id, name, price },
      amount,
    });
  };

  return (
    <Card
      className={classes.productCard}
      sx={{ backgroundColor: inStockQuantity < LOW_AMOUNT ? "#C68484" : "" }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5">
          {name}
        </Typography>
        {inStockQuantity > 0 ? (
          <>
            <Typography variant="body1" color="text.secondary">
              מחיר: {price}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              כמות במלאי: {inStockQuantity}
            </Typography>
          </>
        ) : (
          <Typography variant="h4" color="text.secondary">
            אזל המלאי
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <IconButton color="primary" onClick={addToShoppingCart}>
          <AddShoppingCart />
        </IconButton>
        <TextField
          variant="outlined"
          size="small"
          label="כמות"
          type="number"
          value={amount}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setAmount(event.target.value)
          }
        />
      </CardActions>
    </Card>
  );
};
