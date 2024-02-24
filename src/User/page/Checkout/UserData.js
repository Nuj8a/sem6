import React from "react";
import { Checkbox, Input } from "@nextui-org/react";

const UserData = () => {
  return (
    <div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-4">
          <Input
            type="text"
            variant="faded"
            label="First Name"
            className="rounded-sm"
            size="sm"
          />
          <Input
            type="text"
            variant="faded"
            label="Last Name"
            className="rounded-sm"
            size="sm"
          />
        </div>
        <div className="flex gap-4">
          <Input
            type="email"
            variant="faded"
            label="Email"
            className="rounded-sm"
            size="sm"
          />
          <Input
            type="number"
            variant="faded"
            label="Mobile Number"
            className="rounded-sm"
            size="sm"
          />
        </div>
        <div className="flex gap-4">
          <Input
            type="text"
            variant="faded"
            label="Address Line 1"
            className="rounded-sm"
            size="sm"
          />
          <Input
            type="text"
            variant="faded"
            label="Address Line 2"
            className="rounded-sm"
            size="sm"
          />
        </div>
        <div className="flex gap-4">
          <Input
            type="text"
            variant="faded"
            label="State"
            className="rounded-sm"
            size="sm"
          />
          <Input
            type="number"
            variant="faded"
            label="ZIP Code"
            className="rounded-sm"
            size="sm"
          />
        </div>
        <Checkbox>Create an account</Checkbox>
      </div>
    </div>
  );
};

export default UserData;
