interface Data {
  id: string;
  item: any;
}

export const arrToMap = (data: any[]) => {
  return data.reduce((map, item) => {
    map.set(item._id, item);
    return map;
  }, new Map<string, Data>());
};
