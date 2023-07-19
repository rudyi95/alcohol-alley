import React from "react";
import { useNavigate } from "react-router-dom";
import { SimpleCard } from "src/components/card";

interface IProps {
  className?: string;
  data: Pick<Item, "_id" | "name" | "image" | "price">;
}

export const CardComponent: React.FC<IProps> = ({ className, data }) => {
  const navigate = useNavigate();

  const handleNavigate = (link: string) => {
    navigate(link);
  };

  return <SimpleCard className={className} data={data} navigate={handleNavigate} />;
};
