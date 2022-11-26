export const usersData: UserType[] = [
  {
    name: "John",
    lastName: "Smith",
    birthday: {
      day: 10,
      month: 3,
      year: 1995,
    },
    id: 1,
    address: { country: "Switzerland", city: "Bern" },
  },
  {
    name: "Hanna",
    lastName: "Johnson",
    birthday: {
      day: 25,
      month: 7,
      year: 2000,
    },
    id: 2,
    address: { country: "Germany", city: "Berlin" },
  },
  {
    name: "Alex",
    lastName: "Green",
    birthday: {
      day: 13,
      month: 4,
      year: 1990,
    },
    id: 3,
    address: { country: "Canada", city: "Ottawa" },
  },
  {
    name: "Oliver",
    lastName: "Scott",
    birthday: {
      day: 3,
      month: 11,
      year: 2010,
    },
    id: 4,
    address: { country: "United States", city: "Washington" },
  },
  {
    name: "Henry",
    lastName: "Walker",
    birthday: {
      day: 20,
      month: 6,
      year: 2012,
    },
    id: 5,
    address: { country: "Sweden", city: "Stockholm" },
  },
  {
    name: "William",
    lastName: "Harris",
    birthday: {
      day: 17,
      month: 2,
      year: 1970,
    },
    id: 6,
    address: { country: "Japan", city: "Tokyo" },
  },
  {
    name: "Lucas",
    lastName: "Lee",
    birthday: {
      day: 27,
      month: 5,
      year: 1994,
    },
    id: 7,
    address: { country: "Australia", city: "Canberra" },
  },
  {
    name: "James",
    lastName: "Wilson",
    birthday: {
      day: 5,
      month: 9,
      year: 1998,
    },
    id: 8,
    address: { country: "United Kingdom", city: "London" },
  },
  {
    name: "Theodore",
    lastName: "Miller",
    birthday: {
      day: 1,
      month: 1,
      year: 1986,
    },
    id: 9,
    address: { country: "France", city: "Paris" },
  },
  {
    name: "Daniel",
    lastName: "Jones",
    birthday: {
      day: 26,
      month: 2,
      year: 2014,
    },
    id: 10,
    address: { country: "Denmark", city: "Copenhagen" },
  },
  {
    name: "Thomas",
    lastName: "Brown",
    birthday: {
      day: 8,
      month: 4,
      year: 1993,
    },
    id: 11,
    address: { country: "New Zealand", city: "Wellington" },
  },
  {
    name: "Donald",
    lastName: "Williams",
    birthday: {
      day: 16,
      month: 7,
      year: 2000,
    },
    id: 12,
    address: { country: "Netherlands", city: "Amsterdam" },
  },
];

export type UserType = {
  name: string;
  lastName: string;
  birthday: {
    day: number;
    month: number;
    year: number;
  };
  id: number;
  address: AddressType;
};
export type AddressType = {
  country: string;
  city: string;
};
