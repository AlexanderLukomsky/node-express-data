export const me = {
  firstName: "Alexander",
  lastName: "Lukomsky",
  address: {
    country: "Belarus",
    city: "Minsk",
  },
};
Object.defineProperties(me, {
  birthDay: {
    value: {
      day: 13,
      month: 4,
      year: 1990,
    },
    enumerable: true,
    writable: false,
    configurable: false,
  },
});
