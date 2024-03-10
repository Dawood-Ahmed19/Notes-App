let data = [];

export function getData() {
  return data;
}

export function addData(title) {
  const colors = [
    "#fd99ff",
    "#FF9E9E",
    "#91F48F",
    "#FFF599",
    "#9EFFFF",
    "#B69CFF",
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const newData = {
    id: data.length + 1,
    title: title,
    backgroundColor: randomColor,
  };

  data.push(newData);
}

export { data };
