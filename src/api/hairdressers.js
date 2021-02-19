import { hairdressers } from "data";

const registeredHairdressers = localStorage.getItem("hairdressers");
const getHairdressers = () => {
  return [...registeredHairdressers, hairdressers];
};

export default { getHairdressers };
