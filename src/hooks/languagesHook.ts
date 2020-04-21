import Language from "../types/Language";
import { useState, useEffect } from "react";

const useLanguages = () => {
  const [languages, setLanguages] = useState<Language[]>([]);

  const endpoint =
    "https://gist.githubusercontent.com/varunpvp/74e4752d88f3fa8b21fc671b7eda04f4/raw/208e964bc87f671f81d3c19efd855fb8905cd32d/programming-languages.json";

  useEffect(() => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => setLanguages(data))
      .catch((error) => console.log("catch useLanguages", { error }));
  }, []);

  return languages;
};

export default useLanguages;
