import React from "react";
import TabContent from "./TabContent/TabContent";
import MainLayout from "../MainLayout/MainLayout";
function Home(props) {
  return (
    <div>
      <MainLayout>
        <TabContent />
      </MainLayout>
    </div>
  );
}

export default Home;
