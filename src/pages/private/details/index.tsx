/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect /* , useState */ } from "react";
import { useParams } from "react-router";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Box, CircularProgress, Container, /* TextField, */ Typography } from "@mui/material";

import ActionButton from "src/components/common/buttons/ActionButton";

import { getItemById } from "src/redux/services/itemsService";
import { itemsSlice } from "src/redux/newReducers/items";

import NoImage from "src/assets/No-Image-Placeholder.png";

import { useAppDispatch, useAppSelector } from "src/utils/hooks/redux";

import { useStyles } from "./style";
import { BreadCrumbs } from "src/components/breadCrumbs";
import { split, upperFirst } from "lodash";
import { useLocation } from "react-router-dom";
import CustomIcon from "src/components/customIcon";
import { IconType } from "src/types/enums";
import { DRINK_CATEGORY } from "src/utils/constants/constants";

const getCategoryLabel = (value: string) => {
  const label = DRINK_CATEGORY.find((item) => item.value === value)?.label;

  return label || "";
};

const Details: React.FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { category, id } = useParams();
  const location = useLocation();
  // const [quantity, setQuantity] = useState(1);
  const { item, loading } = useAppSelector((state) => state.items);

  useEffect(() => {
    if (id) {
      dispatch(getItemById(id));
    }

    return () => {
      dispatch(itemsSlice.actions.resetItem());
    };
  }, [dispatch, id]);

  if (loading) {
    return <CircularProgress className="circular" />;
  }

  return (
    <Container maxWidth="lg" className={classes.root}>
      <BreadCrumbs
        links={[
          { text: "Main Page", url: "/" },
          {
            text: `${upperFirst(category)}`,
            url: `${split(location.pathname, category)[0]}${category}`,
          },
          { text: item.name, url: location.pathname, current: true },
        ]}
      />
      <Box className={classes.mainInfo}>
        <Box className={classes.image}>
          <img src={item.image?.url || NoImage} />
        </Box>
        <Box className={classes.details}>
          <Box className={classes.mainDetails}>
            <Typography>{item.name}</Typography>
            <Box className={classes.rating}>rating</Box>
            <Box className={classes.detailRows}>
              <Box className={classes.detailRow}>
                <Typography>price:</Typography>
                <Typography>${item.price}</Typography>
              </Box>
              <Box className={classes.detailRow}>
                <Typography>bottle:</Typography>
                <Typography>${item.volume}</Typography>
              </Box>
              <Box className={classes.detailRow}>
                <Typography>category:</Typography>
                <Typography>{getCategoryLabel(item.category)}</Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex", columnGap: "20px" }}>
              <Typography>qty:</Typography>
              <Box>- 1 +</Box>
            </Box>
            <ActionButton
              className={classes.addBtn}
              onClick={() => {}}
              text={"Add to card "}
              icon={<CustomIcon type={IconType.basket} />}
            />
          </Box>
        </Box>
      </Box>
      <Box className={classes.description}>
        <Typography>Description</Typography>
        <Typography>{item.description}</Typography>
      </Box>
      <Box className={classes.related}></Box>
    </Container>
  );
};

export default Details;
