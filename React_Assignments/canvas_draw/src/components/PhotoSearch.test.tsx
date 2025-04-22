import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import PhotoSearch from "./PhotoSearch";

const mockPhotos = [
  {
    id: "0",
    author: "Alice Smith",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/yC-Yzbqy7PY",
    download_url: "https://picsum.photos/id/0/5000/3333",
  },
  {
    id: "1",
    author: "Bob Johnson",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/LNRyGwIJr5c",
    download_url: "https://picsum.photos/id/1/5000/3333",
  },
];

describe("PhotoSearch component", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("shows loading state initially", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockPhotos),
      })
    ) as jest.Mock;
    render(<PhotoSearch />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();

    await waitFor(() =>
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument()
    );
  });

  it("renders photo list after successful fetch", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockPhotos),
      })
    ) as jest.Mock;
    render(<PhotoSearch />);
    expect(await screen.findByText("Photo list")).toBeInTheDocument();
    expect(screen.getByText("Alice Smith")).toBeInTheDocument();
    expect(screen.getByText("Bob Johnson")).toBeInTheDocument();
  });

  it("handles fetch error", async () => {
    global.fetch = jest.fn(() => Promise.reject("API is down")) as jest.Mock;

    render(<PhotoSearch />);
    expect(
      await screen.findByText("Error while loading the photos")
    ).toBeInTheDocument();
  });

  it("shows 'No photos found' for unmatched search", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockPhotos),
      })
    ) as jest.Mock;

    render(<PhotoSearch />);
    expect(await screen.findByText("Photo list")).toBeInTheDocument();

    const input = screen.getByPlaceholderText("Search...");
    fireEvent.change(input, { target: { value: "xyz" } });

    jest.advanceTimersByTime(300);

    await screen.findByText("No photos found");
  });
});
