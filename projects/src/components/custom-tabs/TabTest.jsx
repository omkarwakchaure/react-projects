import React from "react";
import Tabs from "./tabs";

function RandomComponent() {
  return <div>Random Component Data Here</div>;
}

const TabTest = () => {
  const tabs = [
    { label: "Tab 1", content: "Hello here is Tab 1 data" },
    { label: "Tab 2", content: "In this you will find Tab 2 data" },
    { label: "Tab 3", content: <RandomComponent /> },
  ];
  const handleChange = (currentTabIndex) => {
    console.log(currentTabIndex);
  };

  return <Tabs tabsContent={tabs} onChange={handleChange} />;
};

export default TabTest;
