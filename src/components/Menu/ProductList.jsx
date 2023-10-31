import { useState, useEffect } from "react";
import axios from "axios";

import ReactPaginate from "react-paginate";
import LineLoader from "../ui/LineLoader";
import ProductCard from "./ProductCard";
import SearchBar from "./Search";
import CardSalton from "../ui/CardSalton";
import CategoryList from "./CategoryList";
import { useAuth } from "../../contexts/AuthProvider";
import { getAllWishListRequest } from "../../ApiRequest/ApiRequest";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [input, setInput] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [wishList, setWishList] = useState([]);

  const [auth] = useAuth();

  const handleChangeCategory = (value) => {
    setSearchValue("");
    setInput("");
    setCategory(value);
    setPageNumber(1);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const val = input;
    setSearchValue(val.toLowerCase());
    setCategory("");
    setPageNumber(1);
  };

  // Url define
  let URL;
  if (searchValue) {
    URL = `/v2/food?search=${searchValue}&pageNumber=${pageNumber}`;
  } else if (category) {
    URL = `/v2/food?category=${category}&pageNumber=${pageNumber}`;
  } else {
    URL = `/v2/food?pageNumber=${pageNumber}`;
  }

  useEffect(() => {
    setLoading(true);
    axios
      .get(URL)
      .then((response) => {
        if (response.status === 200) {
          setProducts(response?.data?.data);
          setTotalPage(response?.data?.totalPage);
        } else {
          searchValue([]);
        }
      })
      .catch((error) => {
        if (error?.response.status === 404) {
          setProducts([
            {
              title: "",
              image:
                "https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg",
              price: "",
              _id: "",
              calories: "",
              description: "",
            },
          ]);
          setTotalPage(1);
        }

        console.log(error?.response?.data?.error?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchValue, category, pageNumber, URL]);

  const handlePageClick = (data) => {
    setPageNumber(data.selected + 1);
  };

  // get all wishlist array
  useEffect(() => {
    if (auth.token) {
      getAllWishListRequest()
        .then((res) => {
          const allList = res?.data?.data[0]?.foodId;
          if (allList) {
            setWishList(allList);
          } else {
            setWishList([]);
          }
        })
        .catch(() => {
          setWishList([]);
        });
    }
  }, [auth.token]);

  return (
    <>
      <div className="py-2 px-4">
        <SearchBar
          onChangeHandler={handleSearch}
          input={input}
          setInput={setInput}
        />
        <CategoryList onChangeHandler={handleChangeCategory} />
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
          {products.length !== 0 ? (
            products.map((item) => (
              <ProductCard
                key={item._id}
                item={item}
                wishList={wishList}
                setWishList={setWishList}
              />
            ))
          ) : (
            <>
              <CardSalton />
              <CardSalton />
              <CardSalton />
              <CardSalton />
              <CardSalton />
              <CardSalton />
              <CardSalton />
              <CardSalton />
            </>
          )}
        </div>
        {loading && <LineLoader />}
      </div>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={totalPage}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"list-none flex justify-center items-center mt-10"}
        pageClassName={"bg-neutral cursor-pointer"}
        pageLinkClassName={"p-3 inline-block"}
        previousClassName={
          "bg-neutral cursor-pointer rounded-tl-lg rounded-bl-lg"
        }
        previousLinkClassName={"p-3 inline-block"}
        nextClassName={"bg-neutral cursor-pointer rounded-tr-lg rounded-br-lg"}
        nextLinkClassName={"p-3 inline-block"}
        breakClassName={"bg-neutral cursor-pointer"}
        breakLinkClassName={"p-3 inline-block"}
        activeClassName={"active"}
      />
    </>
  );
}

export default ProductList;
