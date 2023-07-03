import React from "react";

import { Formik } from "formik";
import AddItemPageView from "./view";
import { useAppDispatch } from "src/utils/hooks/redux";
import { editItem, postItem } from "src/redux/services/itemsService";
import { useNavigate, useParams } from "react-router-dom";

const AddItemPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <Formik
      initialValues={{
        _id: "",
        name: "",
        category: "",
        price: 1,
        volume: 1,
        description: "",
        popular: false,
        count: 1,
        image: { _id: "", name: "", url: "" },
      }}
      onSubmit={(value: any) => {
        if (!!id) {
          dispatch(
            editItem({
              data: value,
              func: () => {
                navigate("/admin/items");
              },
            })
          );
        } else {
          const data = value;
          delete data._id;

          dispatch(
            postItem({
              data: value,
              func: () => {
                navigate("/admin/items");
              },
            })
          );
        }
      }}
    >
      {(props) => {
        return <AddItemPageView isEdit={id} {...props} />;
      }}
    </Formik>
  );
};

export default AddItemPage;
