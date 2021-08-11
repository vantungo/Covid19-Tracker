export const checkColor = (number) => {
  if (number < 0) return;
  if (number >= 0 && number < 1e5) return "#FFC4AA";
  if (number >= 1e5 && number < 1e6) return "#FF8A66";
  if (number >= 1e6 && number < 1e7) return "#FF392B";
  if (number >= 1e7) return "#B71525";

};

export const transformToMapData = (data) => {
  const newData = [];
  for (let i = 0; i < data.length; i++) {
    const object = {};
    object.code3 = data[i].countryInfo.iso3;
    object.z = data[i].cases;
    object.textCases = new Intl.NumberFormat().format(data[i].cases);
    object.color = checkColor(data[i].cases);
    newData.push(object);
  }
  return newData;
};
