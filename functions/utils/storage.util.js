
const stringPrefix = "s::";

const saveItem = (key, value) => {
  if (typeof window === "undefined") return;

  if (!key || !value) {
    throw new Error("Invalid item format");
  }

  if (typeof value == "string") {
    value = `${stringPrefix}${value}`;
  }

  if (typeof value == "object") {
    value = JSON.stringify(value);
  }

  localStorage.setItem(key, value);
};

const deleteItem = (key) => {
  if (typeof window === "undefined") return;
  if (!key) {
    throw new Error("Invalid key");
  }

  localStorage.removeItem(key);
};

const getItem = (key)=> {
  if (typeof window == "undefined") return null;
  if (!key) {
    throw new Error("Invalid key");
  }

  const item = localStorage.getItem(key);

  return item
    ? item?.includes(stringPrefix)
      ? item.replace(stringPrefix, "")
      : JSON.parse(item)
    : null;
};

const storageUtil = { saveItem, deleteItem, getItem };

export default storageUtil;
