import Language from "../types/Language";
import { useState, useEffect } from "react";

const useLanguages = () => {
  const [languages, setLanguages] = useState<Language[]>([]);

  const endpoint = "https://api.npoint.io/33d57619ef599fc57a53";

  useEffect(() => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => setLanguages(data))
      .catch((error) => console.log("catch useLanguages", { error }));
  }, []);

  return languages;
};

export default useLanguages;
