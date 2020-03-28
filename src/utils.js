export const searchByItemName = (list, value) => list.filter((item) => value ? item.name.indexOf(value) !== -1: true);

export const filterByItemOrder = (list, value) => list.filter((item) => item.id > value);

export const updateListByCheck = (list, id) => list.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);

export const getCheckedItemList = (list) => list.filter((item) => item.checked);
