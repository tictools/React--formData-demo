import { useState } from "react";
import { INITIAL_INPUT_VALUE } from "./constants";

export const useFilterForm = () => {
  const [filterValue, setFilterValue] = useState(INITIAL_INPUT_VALUE);

  const handleUpdateFilter = (value) => {
    setFilterValue(value);
  };

  return {
    filterValue,
    handleUpdateFilter,
  };
};
