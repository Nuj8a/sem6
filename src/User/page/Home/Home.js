import React, { useEffect, useRef, useState } from "react";
import Carousel from "./Carousel";
import Category from "./Category";
import Product from "./Products";
import Reatured from "./Reatured";
import CardCollection from "./CardsCollection";
import Services from "../../common/page/Services";
import { useDispatch, useSelector } from "react-redux";
// import { getsubcategorys } from "../../../redux/slices/subCategorySlice";
import { getCategorys } from "../../../redux/slices/categorySlice";
import { getproducts } from "../../../redux/slices/productSlice";
import FindGender from "../../../libs/FindGender";
import GetCarousel from "../../../libs/GetCarousel";

const Home = () => {
  const scrollUP = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollUP();
  }, []);
  const dispatch = useDispatch();
  const userRef = useRef(false);
  const { data } = useSelector((state) => state.categoryReducer);
  // const { subcatData } = useSelector((state) => state.subcategoryReducer);
  const { productData } = useSelector((state) => state.productReducer);

  useEffect(() => {
    if (userRef.current === false) {
      // dispatch(getsubcategorys());
      dispatch(getCategorys());
      dispatch(getproducts());
    }
    return () => {
      userRef.current = true;
    };
  }, [dispatch]);

  const [finalCat, setFinalCat] = useState([]);

  let catfil = [];
  let catfilfil = [];
  catfilfil = data;
  catfil = catfilfil.filter(
    (e) =>
      e.categoryName.toLowerCase() !== "home" &&
      e.categoryName.toLowerCase() !== "contact"
  );

  useEffect(() => {
    const categoryProducts = catfil.map((category) => {
      const categoryProducts = productData.filter(
        (product) => String(product.categoryId) === String(category._id)
      );
      return {
        categoryName: category.categoryName,
        image: category.image,
        productCount: categoryProducts.length,
      };
    });
    setFinalCat(categoryProducts);
    // eslint-disable-next-line
  }, [productData, data]);

  const [carousel, setCarousel] = useState([]);
  useEffect(() => {
    getCarousel();
  }, []);

  const getCarousel = async () => {
    const datacar = await GetCarousel();
    let final = datacar.filter((e) => !e.bannerHighlights);
    setCarousel(final);
  };

  return (
    <>
      <Carousel data={carousel} />

      <div className="mx-4 mt-[100px]">
        <Category data={finalCat} />
        <Services />
        <Product
          heading={`Trendy ${FindGender(1)}'s Options`}
          data={productData
            .filter((e) => Number(e.gendertype) === 1)
            .slice(0, 10)}
        />
        <Reatured />
        <Product
          heading={`Trendy ${FindGender(2)}'s Options`}
          data={productData
            .filter((e) => Number(e.gendertype) === 2)
            .slice(0, 10)}
        />
        <CardCollection productData={productData} />
        <Product
          heading={`Trendy ${FindGender(3)}'s Options`}
          data={productData
            .filter((e) => Number(e.gendertype) === 3)
            .slice(0, 10)}
        />
      </div>
    </>
  );
};

export default Home;
