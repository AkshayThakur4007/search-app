import react, { useState } from "react";

export const SearchComponent = () => {
  const [search, setSearch] = useState("");
  // const name = [
  //   "Akshay",
  //   "Ankit",
  //   "Yash",
  //   "Sandeep",
  //   "Hemant",
  //   "Vasu",
  //   "Shubham",
  // ];

  const name = [
    {
      name: "Akshay",
      brand: "nike",
    },
    {
      name: "Ankit",
      brand: "puma",
    },
    {
      name: "Mohit",
      brand: "Nautica",
    },
    {
      name: "Yash",
      brand: " Reebok",
    },
    {
      name: "Vasu",
      brand: "M&M",
    },
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
          .filter(
            (data) =>
              data.name.toLowerCase().includes(search.toLowerCase()) ||
              data.brand.toLowerCase().includes(search.toLowerCase())
          )
          .map((data, idx) => {
            return <div key={idx}>{`${data.name}- ${data.brand}`}</div>;
          })}
      </div>
    </>
  );
};
