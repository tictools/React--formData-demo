import { useState } from "react";
import { getInitialState } from "../data/initialState";
import { isPersonRegistered } from "../helpers";
import { INITIAL_WARNING_STATE } from "./constants";
import { useWarningState } from "./useWarningState";

export const usePersons = ({ filterValue }) => {
  const [persons, setPersons] = useState(getInitialState());
  const { warningState, updateWarningStateWith } = useWarningState(
    INITIAL_WARNING_STATE
  );

  const handleUpdatePersons = ({ name, phone }) => {
    if (isPersonRegistered(persons, name)) {
      updateWarningStateWith({
        name,
        isVisible: true,
      });
      return;
    }

    const newPersonData = {
      id: Date.now(),
      name,
      phone,
    };

    setPersons([...persons, newPersonData]);
  };

  const filteredPersons = filterValue
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(filterValue.toLowerCase())
      )
    : persons;

  return {
    persons: filteredPersons,
    handleUpdatePersons,
    warningState,
    updateWarningStateWith,
  };
};
