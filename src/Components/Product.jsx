import { useState } from "react";
import Card from "./Card";

function Product() {
  const Filter = [
    {
      filter: "All Product",
      sort: "Best Selling",
    },
    {
      filter: "Crystals",
      sort: "On Sale",
    },
    {
      filter: "Jewelry",
      sort: "New Arrivals",
    },
    {
      filter: "Phone Accessories",
    },
    {
      filter: "Limited Edition",
      sort: "Recomended",
    },
  ];

  const [isView, setIsView] = useState(false);

  return (
    <div className="w-full min-h-screen mt-10 lg:mt-0">
      <h1 className="w-full text-center text-[#31546D] font-semibold text-5xl">
        All product
      </h1>
      <div className="flex flex-col px-8 mt-9 filters lg:flex-row lg:gap-14">
        <div className="flex items-center gap-1">
          <p className="text-[#9AB0C0] font-bold">Filter:</p>
          <select
            className="block w-36 px-2 py-2  font-bold leading-tight border border-none rounded-lg outline-none text-[#31546D]"
            name="filter"
            id="filter"
          >
            {Filter.map((item, index) => (
              <option key={index} value={item.filter}>
                {item.filter}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-1">
          <p className="text-[#9AB0C0] font-bold">Sort:</p>
          <select
            className="block w-36 px-3 py-2 pr-2 font-bold leading-tight border border-none rounded-lg outline-none text-[#31546D]"
            name="filter"
            id="filter"
          >
            {Filter.map(
              (item, index) =>
                item.sort && (
                  <option key={index} value={item.sort}>
                    {item.sort}
                  </option>
                )
            )}
          </select>
        </div>
      </div>
      {/* Products */}

      <div
        className={`mt-3  lg:mx-auto overflow-y-auto   ${
          isView ? "lg:max-h-[auto]" : "lg:max-h-[115vh]"
        } justify-center lg:justify-start lg:max-w-[1440px] flex flex-wrap gap-3 py-3 px-6 lg:overflow-hidden `}
      >
        <Card
          image="../assets/item.png"
          name="Crystal Agate Phone Grip"
          price="18.99$"
        />
        <Card
          image="../assets/item.png"
          name="Crystal Agate Phone Grip"
          price="18.99$"
        />
        <Card
          image="../assets/item.png"
          name="Crystal Agate Phone Grip"
          price="18.99$"
        />
        <Card
          image="../assets/item.png"
          name="Crystal Agate Phone Grip"
          price="18.99$"
        />
        <Card
          image="../assets/item.png"
          name="Crystal Agate Phone Grip"
          price="18.99$"
        />
        <Card
          image="../assets/item.png"
          name="Crystal Agate Phone Grip"
          price="18.99$"
        />
        <Card
          image="../assets/item.png"
          name="Crystal Agate Phone Grip"
          price="18.99$"
        />
        <Card
          image="../assets/item.png"
          name="Crystal Agate Phone Grip"
          price="18.99$"
        />
        <Card
          image="../assets/item.png"
          name="Crystal Agate Phone Grip"
          price="18.99$"
        />
        <Card
          image="../assets/item.png"
          name="Crystal Agate Phone Grip"
          price="18.99$"
        />
        <Card
          image="../assets/item.png"
          name="Crystal Agate Phone Grip"
          price="18.99$"
        />
      </div>

      {/* View More */}

      <div className="items-center justify-center hidden h-40 lg:flex">
        <button
          onClick={() => {
            setIsView(!isView);
          }}
          className="my-4  w-[134px] h-[48px] rounded-2xl  font-semibold hover:shadow-lg  hover:text-white   border-2 border-[#75CCEB] text-[#75CCEB] hover:bg-gradient-to-r from-[#75CCEB] to-[#6FB4FF] py-2 px-4 transition duration-300"
        >
          {isView ? "View Less" : "View All"}
        </button>
      </div>
    </div>
  );
}

export default Product;
