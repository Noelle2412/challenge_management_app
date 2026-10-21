"use client";
import { useState } from "react";
import { Label } from "./ui/label";

const SubscribeButton = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  return (
    <div>
      <label htmlFor="subscription">Subscribe: </label>
      <input
        type="checkbox"
        id="subscription"
        defaultChecked={isSubscribed}
        onChange={() => setIsSubscribed((prev) => !prev)}
      />
      <br />
      {isSubscribed ? "Subscribed!" : "Not yet subscribed :("}
    </div>
  );
};

export default SubscribeButton;
