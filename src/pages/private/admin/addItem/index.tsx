import React from "react";

import { Formik } from "formik";
import AddItemPageView from "./view";

const AddItemPage: React.FC = () => {
  return (
    <Formik
      initialValues={{
        name: "Nazar",
        category: "",
        price: 1,
        volume: 1,
        description: "ыфв",
        popular: false,
        count: 2,
        image: "",
        imagePreview: [],
      }}
      onSubmit={(value) => {
        // dispatch(
        //     postItem({
        //       data: { ...value, image: JSON.stringify(binary) },
        //       func: () => {
        //         dispatch(getItemsAll({}));
        //       },
        //     })
        //   );
      }}
    >
      {(props) => {
        return <AddItemPageView {...props} />;
      }}
    </Formik>
  );
};

export default AddItemPage;
