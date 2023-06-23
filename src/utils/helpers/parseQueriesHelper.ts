export const handleParseQueries = (data: QueriesData) => {
  if (!data) return "";
  const entries = Object.entries(data);
  const query: string[] = [];
  entries.map(([key, value]) => {
    if ((value || value === 0) && value !== "null") {
      return query.push(`&${key}=${encodeURIComponent(value)}`);
    }
  });

  return `?${query.join("")}`;
};
