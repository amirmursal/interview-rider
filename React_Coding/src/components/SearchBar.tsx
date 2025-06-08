import { ChangeEvent, useCallback, useState, useRef } from "react";

const SearchBar = () => {
  const [serachInput, setSearchInput] = useState<string>("");
  const [searchData, setSearchData] = useState([]);

  const fetchData = useCallback(async () => {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${serachInput}`
    );
    const data = await response.json();
    setSearchData(data.products);
  }, [serachInput]);

  const timer = useRef<any>(null);

  const debounce = useCallback((callBackFunc: Function, wait = 0) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      callBackFunc();
    }, wait);
  }, []);

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearchInput(event.target.value);
      debounce(fetchData, 300);
    },
    [debounce, fetchData]
  );

  const highlightTitle = useCallback((title: string) => {
    const regex = new RegExp(`${title}`, "gi");
    return title.replace(regex, `<strong>${title}</strong>`);
  }, []);

  return (
    <div className="searchContainer">
      <input value={serachInput} onChange={handleInputChange} />
      <ul>
        {searchData.map(({ title, id }) => (
          <li key={id}>{highlightTitle(title)}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
