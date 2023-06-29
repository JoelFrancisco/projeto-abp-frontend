import { v4 as uuidv4 } from "uuid";

type BikeDetails = {
  id?: string;
  bike_id: number;
  color: string;
  brand: string;
  maxVelocity: number;
}

function save(item: BikeDetails) {
  const allItems = getAll();

  if (!allItems) {
    localStorage.setItem('bikes', JSON.stringify([{ ...item, id: uuidv4() }]));
    return;
  }

  const existingItemIndex = allItems.findIndex((i: BikeDetails) => i.id === item.id);
  
  if (existingItemIndex !== -1) {
    allItems[existingItemIndex] = item;
  } else {
    allItems.push({ ...item, id: uuidv4() });
  }
  
  localStorage.setItem('bikes', JSON.stringify(allItems));
}

function remove(itemId: string) {
  const allItems = getAll();
  const updatedItems = allItems.filter((item: BikeDetails) => item.id !== itemId);
  localStorage.setItem('bikes', JSON.stringify(updatedItems));
}

function getAll() {
  const items = localStorage.getItem("bikes");
  return items ? JSON.parse(items) : [];
}

function getById(itemId: string) {
  const allItems = getAll();
  return allItems.find((item: BikeDetails) => item.id === itemId);
}

export default { save, getById, getAll, remove };
