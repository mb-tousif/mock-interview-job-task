import React from "react";

export default function Footer() {
  return (
    <div className="h-36 bg-[#344c4d] mx-auto py-5 text-gray-50">
      <h1 className="text-2xl text-center">URL Shortening App</h1>
      <p className="text-base text-center">
        Copyright &#169; {new Date().getFullYear()} Inc. All right reserved.
      </p>
    </div>
  );
}