import Link from "next/link";
import { useRouter } from "next/router";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { Pages } from "../../../constants/PageNames";
import { CreateEventFormProps } from "../../../interfaces/general";
import CustomButton from "../../general/button/CustomButton";
import CustomInputField from "../../general/CustomInputField";

const CreateEventForm = () => {
  const router = useRouter();
  const [formState, setFormState] = useState<CreateEventFormProps>({
    endDate: new Date(),
    eventPhoto: "",
    hostName: "",
    location: "",
    name: "",
    startDate: new Date(),
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setFormState((old) => ({ ...old, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(Pages.EVENT);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <CustomInputField
        placeholder="Enter event name"
        name="name"
        type="text"
        containerClassName=" mb-6"
        inputClassName="w-full"
        onChange={handleChange}
        value={formState.name}
        errors={[]}
        required
      />

      <CustomInputField
        placeholder="Enter name of host"
        name="hostName"
        type="text"
        containerClassName=" mb-6"
        inputClassName="w-full"
        onChange={handleChange}
        value={formState.hostName}
        errors={[]}
        required
      />

      <div className="mb-4 border-2  rounded-lg border-gray-300 p-3">
        <p>Event Start Date</p>
        <input type="datetime-local" required name="startDate" />
      </div>

      <div className="mb-4 border-2  rounded-lg border-gray-300 p-3">
        <p>Event End Date</p>
        <input type="datetime-local" required name="endDate" />
      </div>

      <CustomInputField
        placeholder="Enter location of event"
        name="location"
        type="text"
        containerClassName="mb-6"
        inputClassName="w-full"
        onChange={handleChange}
        value={formState.location}
        errors={[]}
        required
      />

      <>
        <label className="block text-sm font-medium text-gray-700">
          Event photo
        </label>
        <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
          <div className="space-y-1 text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div className="flex text-sm text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
              >
                <span>Upload a file</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>
      </>

      <CustomButton
        isLoading={false}
        variant="primary"
        className="transition duration-500 transform hover:-translate-y-1 ease-in-out 
        lg:bg-primary-300  lg:text-white w-full hover:bg-primary-200 mt-4"
      >
        Next
      </CustomButton>
    </form>
  );
};

export default CreateEventForm;
