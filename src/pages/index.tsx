import React from "react";
import CustomButton from "../components/general/button/CustomButton";
import Layout from "../components/general/Layout";
import CatchyHeader from "../components/specific/landing/CatchyHeader";
import LandingImage from "../components/specific/landing/LandingImage";

export default function Home() {
  return (
    <Layout
      title="Welcome - Denvato Social"
      className="relative overflow-hidden bg-pink-100 min-h-screen"
    >
      {/* Mobile view */}
      <div className="flex flex-col lg:flex-row items-center lg:hidden">
        <div className="px-6 py-12 md:px-52 lg:px-0 mt-0 lg:mt-0">
          <CatchyHeader />
        </div>

        <div className=" flex flex-col px-28">
          <LandingImage />
          <CustomButton
            variant="primary"
            className="p-1 rounded-xl lg:self-end transition w-80
            duration-500 transform hover:-translate-y-4 ease-in-out self-center"
          >
            🎉 Create my event
          </CustomButton>
        </div>
      </div>

      {/* Large screen view */}
      <div className="hidden lg:flex flex-row justify-between py-24 px-48 items-center">
        <LandingImage />
        <div>
          <div className="flex flex-col lg:flex-col items-end">
            <CatchyHeader />
            <div>
              <CustomButton
                variant="primary"
                className="p-1 rounded-xl w-44 md:w-96 mx-auto lg:self-end transition 
            duration-500 transform hover:-translate-y-4 ease-in-out"
              >
                🎉 Create my event
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
