/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
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
      filter: "Limited",
      sort: "Recomended",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Crystal Agate Phone Gripct",
      price: "18.99$",
      image: "../assets/item.png",
      filter: "Jewelry",
      sort: "Best Selling",
    },
    {
      id: 2,
      name: "Crystal Agate Phone Gripct",
      price: "18.99$",
      image: "../assets/item.png",
      filter: "Jewelry",
      sort: "On Sale",
    },
    {
      id: 3,
      name: "Crystal Agate Phone Gripct",
      price: "18.99$",
      image: "../assets/item.png",
      filter: "Phone Accessories",
      sort: "Best Selling",
    },
    {
      id: 4,
      name: "Crystal Agate Phone Gripct",
      price: "18.99$",
      image: "../assets/item.png",
      filter: "Jewelry",
      sort: "On Sale",
    },
    {
      id: 5,
      name: "Crystal Agate Phone Gripct",
      price: "18.99$",
      image: "../assets/item.png",
      filter: "Limited",
      sort: "New Arrivals",
    },
    {
      id: 6,
      name: "Crystal Agate Phone Gripct",
      price: "18.99$",
      image: "../assets/item.png",
      filter: "Phone Accessories",
      sort: "On Sale",
    },
    {
      id: 7,
      name: "Crystal Agate Phone Gripct",
      price: "18.99$",
      image: "../assets/item.png",
      filter: "crystals",
      sort: "On Sale",
    },
    {
      id: 8,
      name: "Crystal Agate Phone Gripct",
      price: "18.99$",
      image: "../assets/item.png",
      filter: "Limited",
      sort: "New Arrivals",
    },
    {
      id: 9,
      name: "Crystal Agate Phone Gripct",
      price: "18.99$",
      image: "../assets/item.png",
      filter: "Phone Accessories",
      sort: "New Arrivals",
    },
    {
      id: 10,
      name: "Crystal Agate Phone Gripct",
      price: "18.99$",
      image: "../assets/item.png",
      filter: "crystals",
      sort: "New Arrivals",
    },
    {
      id: 11,
      name: "Crystal Agate Phone Gripct",
      price: "18.99$",
      image: "../assets/item.png",
      filter: "Limited",
      sort: "On Sale",
    },
    {
      id: 12,
      name: "Crystal Agate Phone Gripct",
      price: "18.99$",
      image: "../assets/item.png",
      filter: "Limited",
      sort: "Recomended",
    },
    {
      id: 13,
      name: "Crystal Agate Phone Gripct",
      price: "18.99$",
      image: "../assets/item.png",
      filter: "crystals",
      sort: "Best Selling",
    },
    {
      id: 14,
      name: "Crystal Agate Phone Gripct",
      price: "18.99$",
      image: "../assets/item.png",
      filter: "Limited",
      sort: "Recomended",
    },
    {
      id: 15,
      name: "Crystal Agate Phone Gripct",
      price: "18.99$",
      image: "../assets/item.png",
      filter: "crystals",
      sort: "Best Selling",
    },
    {
      id: 16,
      name: "Crystal Agate Phone Gripct",
      price: "18.99$",
      image: "../assets/item.png",
      filter: "Limited",
      sort: "Recomended",
    },
  ];

  let [FilterProduct, setFilterProduct] = useState([]);
  useEffect(() => {
    setFilterProduct(products);
  }, []);

  const [filter, setFilter] = useState("All Product");
  const [sort, setsort] = useState("Best Selling");

  let collect = [];
  const handleonchange = (event) => {
    setFilter(event.target.value);
    const selectedValue = event.target.value;
    
    

    if (selectedValue === "All Product") {
      
      collect=products
      
      setFilterProduct(collect)
      
     
      } else {
    collect = products.filter(
      (product) => product.filter.toLowerCase() === selectedValue.toLowerCase()
    );
  }

   
    setFilterProduct(collect);
  };

  const handleonchangesort = (event) => {
    setsort(event.target.value);
    
    
    const selectedValue = event.target.value;

    collect = products.filter(
      (product) => product.sort.toLowerCase() === selectedValue.toLowerCase()
    );

 
    

    setFilterProduct(collect)
        
  };

  const [isView, setIsView] = useState(false);

  return (
    <div className="w-full min-h-screen mt-10 lg:mt-0">
      <h1 className="w-full text-center text-[#31546D] font-semibold text-5xl">
        All product
      </h1>
      <div className="flex flex-col px-8 mt-9 filters lg:flex-row lg:gap-14">
        <div className="flex items-center justify-between gap-2 mb-2 lg:justify-start lg:mb-0">
          <p className="text-[#9AB0C0] font-bold">Filter:</p>
          <select
            onChange={handleonchange}
            value={filter}
            className="block w-36 px-2 py-2 flex-1  font-bold leading-tight border border-none rounded-lg outline-none text-[#31546D]"
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
        <div className="flex items-center justify-between gap-1 lg:justify-start">
          <p className="text-[#9AB0C0] font-bold">Sort:</p>
          <select
          onChange={handleonchangesort}
          value={sort}
            className="block w-36 px-3 py-2 pr-2 font-bold flex-1 leading-tight border border-none rounded-lg outline-none text-[#31546D]"
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
        } justify-center lg:justify-start lg:max-w-[1440px] flex flex-wrap gap-3 py-3 px-6 lg:overflow-hidden transition transform duration-150 ease-in-out `}
      >
        {FilterProduct &&
          FilterProduct.map((product) => (
            <Card
              key={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
            />
          ))}
      </div>

      {/* View More */}

      <div className="items-center justify-center hidden h-40 lg:flex">
        <button
          onClick={() => {
            setIsView(!isView);
          }}
          className="my-4 active:scale-95 w-[134px] h-[48px] rounded-2xl  font-semibold hover:shadow-lg  hover:text-white   border-2 border-[#75CCEB] text-[#75CCEB] hover:bg-gradient-to-r from-[#75CCEB] to-[#6FB4FF] py-2 px-4 transition duration-300"
        >
          {isView ? "View Less" : "View All"}
        </button>
      </div>
    </div>
  );
}

export default Product;
