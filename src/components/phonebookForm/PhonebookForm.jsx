import { INITIAL_INPUT_VALUE } from "../../hooks/constants";
import { Button, ButtonSet } from "../shared";

export const PhonebookForm = ({
  updatePersons,
}) => {
  const resetFormValuesFor = ({ inputName, inputPhone }) => {
    inputName.value = INITIAL_INPUT_VALUE;
    inputPhone.value = INITIAL_INPUT_VALUE;
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const { target: form } = event;
    const { name: inputName, phone: inputPhone } = form;

    const formData = new FormData(form);
    const name = formData.get("name");
    const phone = formData.get("phone");

    updatePersons({ name, phone });
    resetFormValuesFor({ inputName, inputPhone });
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        className="form__input"
        name="name"
        placeholder="Insert a name..."
        type="text"
        required
      />
      <input
        className="form__input"
        name="phone"
        placeholder="Insert a phone number..."
        type="text"
        required
      />
      <ButtonSet>
        <Button textContent="Add to phonebook" />
      </ButtonSet>
    </form>
  );
};
