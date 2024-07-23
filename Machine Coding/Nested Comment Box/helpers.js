import { mockUsersData } from "./mock";

export const getRandomUser = () => {
  let randomIndex = Math.floor(Math.random() * 10) % mockUsersData.length;

  return mockUsersData[randomIndex];
};
