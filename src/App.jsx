// import { useState } from "react";

import { FilterForm } from "./components/filterForm";
import { WarningModal } from "./components/modal";
import { PhoneBook } from "./components/phonebook";
import { PhonebookForm } from "./components/phonebookForm";
import { MainHeader, Section, SectionHeader } from "./components/shared";
import { usePersonsForm } from "./hooks";

const App = () => {
  const {
    persons,
    handleUpdatePersons,
    filterValue,
    handleUpdateFilter,
    warningState,
    handleUpdateWarningStateWith,
  } = usePersonsForm();

  return (
    <div className="main">
      <MainHeader textContent="React controlled form" />
      <div className="wrapper">
        <Section>
          <SectionHeader textContent="New register" />
          <PhonebookForm updatePersons={handleUpdatePersons} />
        </Section>
        <Section>
          <SectionHeader textContent="Phonebook" />
          <FilterForm
            filterValue={filterValue}
            updateFilterValue={handleUpdateFilter}
          />
          <PhoneBook persons={persons} />
        </Section>
      </div>
      <WarningModal
        updateWarningStateWith={handleUpdateWarningStateWith}
        warningState={warningState}
      />
    </div>
  );
};

export default App;
