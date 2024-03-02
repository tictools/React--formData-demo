import { useState } from "react";

export const useWarningState = (initialValue) => {
  const [warningState, setWarningState] = useState(initialValue);

  const handleUpdateWarningStateWith = ({ name, isVisible }) => {
    setWarningState((prevWarningState) => {
    return {
        ...prevWarningState,
        name,
        isVisible,
      };
    });
  };

  return {
    warningState,
    handleUpdateWarningStateWith,
  };
};
