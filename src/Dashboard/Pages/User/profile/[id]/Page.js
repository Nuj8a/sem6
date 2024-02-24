import React from "react";
import { useParams } from "next/navigation";
import Main from "../Main";

const Page = () => {
  const params = useParams();
  return (
    <>
      <Main userId={params.id} />
    </>
  );
};

export default Page;
