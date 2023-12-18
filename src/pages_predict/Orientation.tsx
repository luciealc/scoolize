import React from "react";
import MainContentPage from "../components/MainContent";

export interface IOrientationsPageProps {}

const OrientationsPage: React.FunctionComponent<IOrientationsPageProps> = (
  props
) => {
  return (
    <div>
      <MainContentPage>
        <h1>Orientation</h1>
      </MainContentPage>
    </div>
  );
};

export default OrientationsPage;
