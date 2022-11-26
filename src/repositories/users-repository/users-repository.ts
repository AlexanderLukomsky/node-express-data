import { usersData, UserType } from "./data";

export const usersRepository = {
  //get
  findUsers: async (name?: string): Promise<UserType[]> => {
    if (name) {
      return usersData.filter((user) => user.name.includes(name));
    }

    return usersData;
  },

  findUserById: async (id: number): Promise<UserType | null> => {
    const user = usersData.find((user) => user.id === id);

    if (user) {
      return user;
    }

    return null;
  },
  //put
  updateUser: async (id: number, data: UserType): Promise<Boolean> => {
    const user = usersData.find((user) => user.id === id);

    if (user) {
      Object.assign(user, { ...data, id: user.id });
      return true;
    }
    return false;
  },
  //post
  createUser: async (user: Omit<UserType, "id">): Promise<UserType> => {
    const newUser = {
      ...user,
      id: +new Date(),
    };
    usersData.unshift(newUser);
    return newUser;
  },
  //delete
  deleteUser: async (id: number): Promise<Boolean> => {
    const userIndex = usersData.findIndex((user) => user.id === id);
    if (userIndex > -1) {
      usersData.splice(userIndex, 1);

      return true;
    }
    return false;
  },
};
