import react, { useState } from "react";

export const SearchComponent = () => {
  const [search, setSearch] = useState("");
  const name = [
    "Akshay",
    "Ankit",
    "Yash",
    "Sandeep",
    "Hemant",
    "Vasu",
    "Shubham",
  ];

  const searchHandler = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter name to search"
        value={search}
        onChange={searchHandler}
      />
      <div className="name">
        {name
          .filter((data) => data.toLowerCase().includes(search.toLowerCase()))
          .map((data, idx) => {
            return <div key={idx}>{data}</div>;
          })}
      </div>
    </>
  );
};
