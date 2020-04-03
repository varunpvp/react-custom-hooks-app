import React, { useState, useEffect } from "react";
import useUserInput from "./hooks/userInputHook";
import useSearchable from "./hooks/searchableHook";
import Language from "./types/Language";
import "./App.css";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const [languages, setLanguages] = useState<Language[]>([]);

  const searchText = useUserInput("");

  useEffect(() => {
    fetch("/languages.json")
      .then(response => response.json())
      .then(data => setLanguages(data))
      .catch(err => console.log({ err }))
      .finally(() => setLoading(false));
  }, []);

  const searchableLanguages = useSearchable(languages, searchText.value, l => [
    l.name
  ]);

  return (
    <div className="main">
      <h2 className="text-center">Programming Languages Search App</h2>
      <input
        placeholder="Search languages here..."
        type="text"
        className="search-input"
        {...searchText}
      />

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        searchableLanguages.slice(0, 10).map(lang => (
          <p className="text-center" key={lang.id}>
            {lang.name}
          </p>
        ))
      )}
    </div>
  );
};

export default App;
