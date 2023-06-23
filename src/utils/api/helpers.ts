import { SAMPLE_PRODUCTS } from "../constants/constants";

export const getItemUsingID = (id: any) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let res = SAMPLE_PRODUCTS.filter((x) => x.id === parseInt(id, 10));
      resolve(res.length === 0 ? null : res[0]);
    }, 500);
  });
};

export const sortByPrice = (data: any, sortval: any) => {
  if (sortval !== "lh" && sortval !== "hl") return data;

  let items = [...data];

  if (sortval === "lh") {
    items.sort((a, b) => a.price - b.price);
  } else {
    items.sort((a, b) => b.price - a.price);
  }

  return items;
};

export const searchItems = ({
  category = "popular",
  term = "",
  sortValue = "lh",
  itemsPerPage = 8,
  usePriceFilter = false,
  showPopular = false,
  minPrice = 0,
  maxPrice = 1000,
  page = 1,
}) => {
  // Turn this into a boolean
  usePriceFilter = usePriceFilter === true;
  showPopular = showPopular === true;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let data = SAMPLE_PRODUCTS.filter((item) => {
        if (showPopular) {
          return false;
        }
        if (usePriceFilter && (item.price < minPrice || item.price > maxPrice)) {
          return false;
        }

        if (category === "popular") {
          return item.popular;
        }

        if (category !== "Усі категорії" && category !== item.category) return false;

        if (term && !item.name.toLowerCase().includes(term.toLowerCase())) return false;

        return true;
      });

      let totalLength = data.length;

      data = sortByPrice(data, sortValue);

      data = data.slice((page - 1) * itemsPerPage, page * itemsPerPage);

      resolve({ data, totalLength });
    }, 500);
  });
};
