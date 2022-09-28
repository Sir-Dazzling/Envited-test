import Link from "next/link";
import React from "react";
import { Pages } from "../../../constants/PageNames";
import { CreateEventLayoutProps } from "../../../interfaces/general";
import Layout from "../../general/Layout";

const CreateEventLayout: React.FC<CreateEventLayoutProps> = ({
  left,
  right,
  heading,
  title,
  subheading,
}) => {
  return (
    <Layout title={title}>
      <div className="flex min-h-screen justify-between">
        <div
          className="lg:bg-gray-200 lg:block lg:w-3/4
           relative hidden px-5 py-5"
        >
          {left}
        </div>
        <div
          className={`bg-white-500 lg:bg-green
           lg:flex-grow w-full px-8 py-5 lg:pt-12`}
        >
          <div>
            <div className="lg:block hidden mb-8 text-center">
              <h1 className="mb-1 text-3xl font-medium text-primary-300">
                {heading}
              </h1>
              {subheading && (
                <h3 className="text-sm font-light text-gray-500">
                  {subheading}
                </h3>
              )}
            </div>
            <div className="max-w-sm mx-auto my-auto">{right}</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateEventLayout;
