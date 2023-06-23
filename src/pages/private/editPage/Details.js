import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { addItemInCart } from "../../redux/actions/index";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Button, CircularProgress, TextField } from "@mui/material";

import { getItemUsingID } from "../../utils/api/helpers";

import "./Details.css";

const Details = () => {
  const [quantity, setQuantity] = useState(1);
  const [item, setItem] = useState(null);
  const [itemLoading, setItemLoading] = useState(false);
  let isCompMounted = false;

  const dispatch = useDispatch();
  const params = useParams();

  async function fetchProductAndRelatedItems(productId) {
    setItemLoading(true);

    let item = await getItemUsingID(productId);

    // Make sure this component is still mounted before we set state..
    if (isCompMounted) {
      setItem(item);
      setQuantity(1);
      setItemLoading(false);
    }
  }

  useEffect(() => {
    isCompMounted = true;
    fetchProductAndRelatedItems(params.id);

    return () => (isCompMounted = false);
  }, [params.id]);

  if (itemLoading) {
    return <CircularProgress className="circular" />;
  }

  if (!item) {
    return null;
  }

  return (
    <div className="details-container">
      <div className="item-details">
        <div className="details-title">{item.name}</div>
        <div className="details-item-container">
          <img src={item.imageUrls[0]} alt="" className="details-item-image" />
          <div className="details-item-content">
            <div className="item-price">Ціна: {item.price} грн.</div>
            {item.popular && <div className="item-promotional-price">(Акційна ціна)</div>}

            <div className="item-volume-txt">Об'єм: {item.volume}л.</div>
            <div className="item-category-txt">Категорія: {item.category}</div>

            <div className="item-input-cart-btn">
              <TextField
                type="number"
                value={quantity}
                style={{ marginTop: 20, marginBottom: 10, width: 70 }}
                label="Кількість"
                inputProps={{ min: 1, max: 10, step: 1 }}
                onChange={(e) => setQuantity(+e.target.value)}
              />
              <Button
                className="item-cart-btn"
                color="primary"
                variant="outlined"
                onClick={() => {
                  dispatch(
                    addItemInCart({
                      ...item,
                      quantity,
                    })
                  );
                }}
              >
                У кошик <AddShoppingCartIcon style={{ marginLeft: 5 }} />
              </Button>
            </div>
          </div>
        </div>

        {/* Product description */}
        <div className="item-description-title">Опис</div>
        <div className="item-description">{item.description ? item.description : "Відсутній"}</div>
      </div>
    </div>
  );
};

export default Details;
