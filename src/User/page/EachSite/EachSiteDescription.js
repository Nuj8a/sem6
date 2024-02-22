import { Button, Chip } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { IoMdCart } from "react-icons/io";
import { BsBagCheckFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import formatRS from "../../../libs/FormatRS";
import FindGender from "../../../libs/FindGender";
import ColorsShow from "../../../libs/ColorsShow";
import axios from "axios";
import { API_BASE_URL } from "../../../redux/config";
import { useNavigate, useParams } from "react-router-dom";

const EachSiteDescription = ({ data }) => {
  const navigate = useNavigate();

  const { id } = useParams();
  const finalPrice = Math.round(
    data?.price - (data?.price * data?.discount) / 100
  );

  const [liked, setLiked] = useState({
    likedBool: false,
    likeNumber: 0,
  });
  useEffect(() => {
    setLiked({
      likedBool: data?.likeId?.includes(
        JSON.parse(localStorage.getItem("data"))?._id
      ),
      likeNumber: data?.likeId?.length || 0,
    });
  }, [data]);
  const likeOrDislikeBlog = async (blogId) => {
    try {
      const response = await axios.patch(
        `${API_BASE_URL}/api/post/blogs/like/${blogId}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            "auth-token": `${JSON.parse(localStorage.getItem("token"))}`,
          },
        }
      );
      return response.data.success;
    } catch (error) {
      console.error("Error liking/disliking blog:", error);
    }
  };

  const likeBtnPress = async () => {
    if (localStorage.getItem("data")) {
      setLiked((prevState) => ({
        likedBool: !prevState.likedBool,
        likeNumber: prevState.likedBool
          ? prevState.likeNumber - 1
          : prevState.likeNumber + 1,
      }));
      await likeOrDislikeBlog(id);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="p-3 px-5 relative !font-poppins">
      <div className="flex gap-3 flex-col font-poppins">
        <h3 className="text-[#ea580c]">{data?.categoryName}</h3>
        <h2 className="text-3xl font-semibold text-black">
          {data?.title?.slice(0, 1).toUpperCase() + data?.title?.slice(1)}
        </h2>
        <div
          className="text-black/80 line-clamp-4"
          dangerouslySetInnerHTML={{ __html: data?.description }}
        ></div>

        <div className="my-3">
          <div className="flex gap-5">
            <div className="text-black text-lg">{formatRS(finalPrice)}</div>
            <Chip
              color="success"
              size="sm"
              className="scale-85 text-white"
              radius="sm"
            >
              {data?.discount}% OFF
            </Chip>
          </div>
          <div className="line-through text-xs text-red-500">
            {formatRS(data?.price)}
          </div>
        </div>
        <div className="text-sm flex gap-2 flex-col">
          <div className="text-black/80">
            {FindGender(data?.gendertype).toLocaleLowerCase() === "men"
              ? `Man Up Your Style: Shop Our Men's Collection Now!`
              : FindGender(data?.gendertype).toLocaleLowerCase() === "women"
                ? "Level Up Your Style: Shop Our Women's Collection Now!"
                : "Elevate Your Look: Explore Our Unisex Collection Today!"}
          </div>
          <div className="text-black/80 flex">
            <div>Choose Color:</div>
            <ColorsShow productColor={data?.productcolor || []} />
          </div>
        </div>
        <div className="mt-4 flex gap-5">
          <Button
            isPressable
            radius="none"
            className="font-poppins flex justify-center px-10 items-center rounded-sm duration-300 font-semibold"
            startContent={<BsBagCheckFill />}
            color="primary"
          >
            Order Now
          </Button>
          <Button
            radius="none"
            isPressable
            color="primary"
            className="font-poppins flex justify-center px-10 items-center rounded-sm duration-300 font-semibold"
            variant="bordered"
            startContent={<IoMdCart className="scale-110" />}
          >
            <div>Add to cart</div>
          </Button>
        </div>
      </div>
      <div
        onClick={likeBtnPress}
        className={`absolute flex gap-2 items-end font-semibold justify-center top-0 ${liked.likedBool ? "text-blue-700" : "text-black/80"}  cursor-pointer right-10 text-xl`}
      >
        {liked.likeNumber > 0 && (
          <div className="text-xs">{liked.likeNumber}</div>
        )}
        <FaHeart />
      </div>
    </div>
  );
};

export default EachSiteDescription;
