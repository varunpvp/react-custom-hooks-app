import Language from "../types/Language";
import { useState, useEffect } from "react";

const useLanguages = () => {
  const [languages, setLanguages] = useState<Language[]>([]);

  useEffect(() => {
    fetch("/languages.json")
      .then((response) => response.json())
      .then((data) => setLanguages(data))
      .catch((error) => console.log("catch useLanguages", { error }));
  }, []);

  return languages;
};

export default useLanguages;
