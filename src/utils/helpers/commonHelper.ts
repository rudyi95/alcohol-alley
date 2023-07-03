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

export const calcSize = (start: number, end: number, min: number, max: number) => {
  const disViewport = end - start
  const disSize = max - min
  const k = disSize / disViewport
  const baseSize = min - start * k

  return `calc(${Math.round(baseSize * 100) / 100}px + ${Math.round(100 * k * 100) / 100}vw)`
}