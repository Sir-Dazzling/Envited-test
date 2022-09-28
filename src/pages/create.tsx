import React from "react";
import CreateEventLayout from "../components/specific/create/CreateEventLayout";
import CreateEventForm from "../components/specific/create/CreateForm";
import { Pages } from "../constants/PageNames";

const LeftSide = () => (
  <img src="/svgs/create-event.svg" alt="logo" className="mt-24" />
);

export default function Create() {
  return (
    <CreateEventLayout
      title="Create Event"
      heading="Fill in relevant details to proceed"
      left={<LeftSide />}
      right={<CreateEventForm />}
      link={Pages.EVENT}
    />
  );
}
