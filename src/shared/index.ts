export const extend = Object.assign;

export const isObject = (value) => {
  return value !== null && typeof value === "object";
};

export const hasChanged = (val, newVal) => {
  return !Object.is(val, newVal);
};

export const hasOwn = (val, key) => {
  return Object.prototype.hasOwnProperty.call(val, key);
};
