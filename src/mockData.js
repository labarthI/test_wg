let list = [];

for (let i = 1; i <= 300; i++) {
  list.push({
    id: i,
    name: `Элемент ${i}`,
    checked: false,
  });
};

export { list };
