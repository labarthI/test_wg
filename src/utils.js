export const searchByItemName = (list, value) => (
  list.filter((item) => (value ? item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 : true))
);

export const filterByItemOrder = (list, value) => list.filter((item) => item.id > value);

export const updateListByCheck = (list, id) => (
  list.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
);

export const getCheckedItemList = (list) => list.filter((item) => item.checked);

export const getEndingTitle = (count) => {
  switch (count) {
    case 0:
      return 'ов';
    case 1:
      return '';
    default:
      return 'а';
  }
};
