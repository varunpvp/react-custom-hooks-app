import React from "react";
import useUserInput from "./hooks/userInputHook";
import useSearchable from "./hooks/searchableHook";
import useLanguages from "./hooks/languagesHook";

import "./App.css";

const App: React.FC = () => {
  const searchText = useUserInput("");

  const languages = useLanguages();

  const searchableLanguages = useSearchable(
    languages,
    searchText.value,
    (l) => [l.name]
  );

  return (
    <div className="main">
      <h2 className="text-center uppercase">Programming Languages</h2>
      <input
        placeholder="Search languages here..."
        type="text"
        className="search-input text-center"
        {...searchText}
      />

      {searchableLanguages.slice(0, 10).map((l) => (
        <p className="text-center" key={l.id}>
          {l.name}
        </p>
      ))}
    </div>
  );
};

export default App;
