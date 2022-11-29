export const me = {
  firstName: "Alexander",
  lastName: "Lukomsky",
  address: {
    country: "Belarus",
    city: "Minsk",
  },
  profession: "Frontend Developer",
  stack: [
    "React",
    "TypeScript",
    "JavaScript",
    "Redux",
    "Redux Toolkit",
    "HTML",
    "CSS",
    "SASS",
    "Git",
    "Material-UI",
    "Axios",
    "Figma",
    "Express (basic)",
  ],
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
