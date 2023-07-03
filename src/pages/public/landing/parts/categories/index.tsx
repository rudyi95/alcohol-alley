import React from "react";

import { Box, Container, Typography } from "@mui/material";

import WineImg from "src/assets/landing/wine.png";
import BeerImg from "src/assets/landing/beer.png";
import BrandyImg from "src/assets/landing/brandy.png";
import CognacImg from "src/assets/landing/cognac.png";
import WhiskeyImg from "src/assets/landing/whiskey.png";
import LiquorImg from "src/assets/landing/liquor.png";
import RumImg from "src/assets/landing/rum.png";
import TequilaImg from "src/assets/landing/tequila.png";
import VodkaImg from "src/assets/landing/vodka.png";
import GinImg from "src/assets/landing/gin.png";

import { useStyles } from "./style";
import { useNavigate } from "react-router-dom";

const categories = [
  { title: "wine", img: WineImg },
  { title: "beer", img: BeerImg },
  { title: "brandy", img: BrandyImg },
  { title: "liquor", img: LiquorImg },
  { title: "cognac", img: CognacImg },
  { title: "rum", img: RumImg },
  { title: "tequila", img: TequilaImg },
  { title: "whiskey", img: WhiskeyImg },
  { title: "vodka", img: VodkaImg },
  { title: "gin", img: GinImg },
];

export const CategoriesBlock: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Typography className={classes.categoryTitle}>Category</Typography>
      <Box className={classes.categoryList}>
        {categories.map((item, index) => {
          return (
            <Box
              component="button"
              key={index}
              className={classes.categoryContainer}
              onClick={() => navigate(`products/${item.title}`)}
            >
              <Typography className={classes.categoryItem}>{item.title}</Typography>
              <img src={item.img} alt={item.title} />
            </Box>
          );
        })}
      </Box>
    </Container>
  );
};
