export const selectData = [
  {
    value: 0,
    label: 'Без фильтра',
  },
  {
    value: 10,
    label: 'Номер > 10',
  },
  {
    value: 100,
    label: 'Номер > 100',
  },
  {
    value: 200,
    label: 'Номер > 200',
  },
];

const list = [];

for (let i = 1; i <= 300; i++) {
  list.push({
    id: i,
    name: `Элемент ${i}`,
    checked: false,
  });
}

export { list };
