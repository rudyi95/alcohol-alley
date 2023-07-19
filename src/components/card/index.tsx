import React from "react";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  CardActions,
  CardActionArea,
} from "@mui/material";
import classnames from "classnames";

import { Icon, Button } from "src/shared/ui";

import NoImage from "src/assets/No-Image-Placeholder.png";

import { IconType } from "src/types/enums";

import { useStyles } from "./style";

interface IProps {
  className?: string;
  data: Pick<Item, "_id" | "name" | "image" | "price">;
  navigate: (e: string) => void;
}

export const SimpleCard: React.FC<IProps> = ({ data, className, navigate }) => {
  const { _id, name, image, price } = data;
  const classes = useStyles();

  return (
    <Card variant="outlined" className={classnames(classes.root, className)}>
      <CardActionArea className={classes.content}>
        <Box className={classes.imageContainer}>
          <CardMedia
            component="img"
            src={image?.url || NoImage}
            alt="card image"
            className={classes.image}
          />
        </Box>

        <Box sx={{ width: "100%" }}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              rowGap: "10px",
              padding: "15px",
              textAlign: "start",
            }}
          >
            <Typography variant="h7" className={classes.title}>
              {name}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", columnGap: "8px" }}>
              <Typography variant="h5">$ {price}</Typography>
            </Box>
          </CardContent>
        </Box>

        <Box sx={{ width: "100%" }}>
          <CardActions
            sx={{
              padding: "15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Button onClick={() => navigate(_id)} text={"Details"} />
            <Icon
              type={IconType.basket}
              onClick={(e) => {
                console.log(e);
              }}
            />
          </CardActions>
        </Box>
      </CardActionArea>
    </Card>
  );
};
