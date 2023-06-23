import React/* , { BaseSyntheticEvent } */ from "react";

import { Box, Breadcrumbs, Link } from "@mui/material";

interface IProps {
  links: {
    text: string;
    url?: string;
    color?: string;
    current?: boolean;
  }[];
}

export const BreadCrumbs: React.FC<IProps> = ({ links }) => {
//   const handleClick = (event: BaseSyntheticEvent) => {
//     event.preventDefault();
//     console.info("You clicked a breadcrumb.", event.target);
//   };

  return (
    <Box role="presentation" /* onClick={handleClick} */>
      <Breadcrumbs aria-label="breadcrumb">
        {links.map((link) => {
          return (
            <Link
              underline={!link.current ? "hover" : "none"}
              href={link.url || "/"}
              color={link.color || "inherit"}
            >
              {link.text}
            </Link>
          );
        })}
      </Breadcrumbs>
    </Box>
  );
};
