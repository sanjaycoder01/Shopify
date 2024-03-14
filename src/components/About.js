import React from "react";

const About = () => {
  return (
    <div className=" bg-blue-950 grid grid-cols-5 h-[200px] mt-10">
      <div className="mx-20 mt-4">
        <h2 className="text-gray-300  font-light mb-[4px] cursor-pointer hover:underline hover:text-white text-xl ">
          About
        </h2>
        <p className="text-white font-light mb-[4px] text-sm cursor-pointer hover:underline hover:text-white ">
          contact us
        </p>

        <p className="text-white  font-light mb-[4px] text-sm cursor-pointer hover:underline hover:text-white">
          About us
        </p>
        <p className="text-white  font-light mb-[4px] text-sm cursor-pointer hover:underline hover:text-white">
          Information
        </p>
      </div>

      <div className="mx-9 mt-4 w-[100px] ">
        <h2 className="text-gray-300 font-light    w-[100px] cursor-pointer hover:underline hover:text-white text-xl">
          {" "}
          Companines
        </h2>

        <a href="https://www.myntra.com/">
          <p className="text-white font-light text-sm mb-[4px] cursor-pointer hover:underline hover:text-white">
            {" "}
            Myntra
          </p>
        </a>
        <a href="https://www.flipkart.com/">
          <p className="text-white font-light text-sm mb-[4px] cursor-pointer hover:underline hover:text-white">
            {" "}
            Flipkart{" "}
          </p>
        </a>
        <a href="https://www.cleartrip.com/">
          {" "}
          <p className="text-white font-light text-sm mb-[4px] cursor-pointer hover:underline hover:text-white">
            {" "}
            Cleartrip
          </p>
        </a>
        <a href="https://www.shopsy.in/">
          {" "}
          <p className="text-white text-sm font-light cursor-pointer hover:underline hover:text-white">
            {" "}
            Shopsy
          </p>
        </a>
      </div>
      <div className="mx-10 mt-4 text-white font-light text-sm ">
        <p className="mb-[4px] cursor-pointer hover:underline hover:text-white">
          &copy; 2024 Your Shopify. All rights reserved.
        </p>
        <p className="mb-[4px] cursor-pointer hover:underline hover:text-white">
          3rd Main Street, City, Country
        </p>
        <p className="text-white text-sm font-light cursor-pointer hover:underline hover:text-white">
          Email:sjkulkarni31@gmial.com.com
        </p>
        <p className="mt-16 cursor-pointer hover:underline hover:text-white">
          Made with ❤️ by Sanjay
        </p>
      </div>
      <div className="mx-10 mt-4 text-white font-light text-sm">
        <ul class="mb-[4px]">
          <li class="mb-[4px] cursor-pointer hover:underline hover:text-white">
            <a href="/privacy-policy  ">Privacy Policy</a>
          </li>
          <li class="mb-[4px] cursor-pointer hover:underline hover:text-white">
            <a href="/terms-of-service">Terms of Service</a>
          </li>
          <li class="mb-[4px] cursor-pointer hover:underline hover:text-white">
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
      </div>
      <div class="mx-10 mt-4 text-white font-light text-sm">
        <p>Follow us on social media:</p>
        <ul className="flex space-x-4 mt-2">
          <li>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXTbopIkd6yknBSoBmXoIuMgmVcU_jQNVGPmbsf-NMXez2eKARyjBm2wx_J8mekerfj9w&usqp=CAU"
              className="h-7 w-10 cursor-pointer"
            />
            <a href="https://twitter.com/example"></a>
          </li>
          <li>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtdJfoqoUdMh_FiJNqzzj8opDDuBdD8D6HUg&usqp=CAU"
              className="h-7 w-10 cursor-pointer "
            />
            <a href="https://facebook.com/example"></a>
          </li>
          <li>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0TpH31HxFaKAJO7oLWKETdiJW8HM6ep-b5w&usqp=CAU"
              className="h-7 w-10 cursor-pointer"
            />
            <a href="https://instagram.com/example"></a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
