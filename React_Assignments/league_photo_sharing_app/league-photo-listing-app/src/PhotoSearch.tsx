import { useState, useCallback, useEffect } from "react";

const PhotoSearch = () => {
  const [allPhotos, setAllPhotos] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const getPhotoList = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await fetch("https://picsum.photos/v2/list");
      const response = await data.json();
      setAllPhotos(response);
      setPhotos(response);
    } catch (error) {
      setError(error as string);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const debounce = (func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: any[]) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const handleSearch = useCallback(
    (text: string) => {
      const trimmed = text.trim().toLowerCase();
      if (trimmed === "") {
        setPhotos(allPhotos);
        return;
      }
      const regex = new RegExp(`${trimmed}`, "i");
      //@ts-ignore // TODO: Fix this type error
      const filtered = allPhotos.filter((photo) => regex.test(photo.author));
      setPhotos(filtered);
    },
    [allPhotos]
  );

  const debouncedHandleSearch = debounce(handleSearch, 300);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    debouncedHandleSearch(value);
  };

  const highlightText = (text: string, term: string) => {
    if (!term) return text;

    // Escape regex special chars from term
    const escapedTerm = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    // Match only if it's part of a full word (no space in between)
    const regex = new RegExp(`\\b\\w*${escapedTerm}\\w*\\b`, "gi");

    return text.replace(regex, (match) => {
      if (match.toLowerCase().includes(term.toLowerCase())) {
        return `_${match}_`;
      }
      return match;
    });
  };

  useEffect(() => {
    getPhotoList();
  }, [getPhotoList]);

  return (
    <div className="container">
      <section>
        <h2>Search photos</h2>
        <input
          className="search-input"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
        />
      </section>
      <section>
        {error && (
          <span className="status-message">Error while loading the photos</span>
        )}
        {isLoading && <span className="status-message">Loading...</span>}
        {!isLoading && !error && photos.length === 0 && (
          <span className="status-message">No photos found</span>
        )}
        {photos.length > 0 && (
          <>
            <h2>Photo list</h2>
            <div className="card-list">
              {photos.map(({ id, download_url, author }) => (
                <div className="card" key={id}>
                  <img src={download_url} alt={author} className="img" />
                  <h3>{highlightText(author, searchTerm)}</h3>
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default PhotoSearch;
