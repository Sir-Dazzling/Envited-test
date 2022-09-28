import React from "react";
import Layout from "../components/general/Layout";
import { GoLocation } from "react-icons/go";
import { BsChevronRight } from "react-icons/bs";

export default function EventPage() {
  return (
    <Layout
      title="Event Details"
      className="flex flex-col-reverse lg:flex-row lg:px-60 py-0 sm:py-24 
      lg:py-48 min-h-screen lg:justify-evenly sm:items-center justify-end"
    >
      <div className="w-full lg:w-1/2 px-5 md:px-40 lg:px-5">
        <div className="justify-self-center w-full">
          <h3 className="text-primary-400 text-2xl sm:text-5xl font-bold leading-10 mt-2">
            Birthday Bash
          </h3>
          <p className="font-bold text-sm md:text-lg text-custom-neutral-500 mt-1 ms:mt-4">
            Hosted by Elysia
          </p>

          <div className="mt-8 md:mt-16 space-y-8">
            <div className="flex space-x-5">
              <div className="bg-white shadow-md self-center p-3 rounded-xl">
                <img src="/svgs/Calendar.svg" alt="calendar icon" />
              </div>

              <div className="flex items-center justify-between w-full lg:w-2/3">
                <div>
                  <p className="text-primary-300 font-bold md:text-lg">
                    18 August 6:00PM
                  </p>
                  <p className="text-custom-neutral-500 font-normal md:text-lg">
                    to 19 August 1:00PM UTC + 10
                  </p>
                </div>
                <BsChevronRight className="cursor-pointer" />
              </div>
            </div>

            <div className="flex space-x-5">
              <div className="bg-white shadow-md self-center p-3 rounded-xl">
                <GoLocation className="text-primary-300" size={32} />
              </div>
              <div className="flex items-center justify-between w-full lg:w-2/3">
                <div>
                  <p className="text-primary-300 font-bold text-lg">
                    Street name
                  </p>
                  <p className="text-custom-neutral-500 font-normal text-lg">
                    Suburb, State, Postcode
                  </p>
                </div>
                <BsChevronRight className="cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/17d6299f-f287-469c-a403-b8ab9d75aa62/Birthday_cake.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220928T010048Z&X-Amz-Expires=86400&X-Amz-Signature=f8f1656795aa19faedf1d573b0f7154988818dbfe6c9a595a153c1b5e778dbb1&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Birthday%2520cake.png%22&x-id=GetObject"
          alt="birthday image"
          className="sm:mb-16 lg:mb-0"
          height={500}
          width={500}
        />
      </div>
    </Layout>
  );
}
