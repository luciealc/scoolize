import React from "react";
import { Link } from "react-router-dom";
import PredictLogo from "../../assets/logos/predict.webp";
import PrepareLogo from "../../assets/logos/prepare.webp";
import logOut from "../../auth/hooks/logOut";
import SchoolMenu from "./menu/SchoolMenu";
import StudentMenu from "./menu/StudentMenu";

export interface INavbarProps {
  role: string;
}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  const getMenu = () => {
    switch (props.role) {
      case "student":
        return <StudentMenu />;
      case "school":
        return <SchoolMenu />;
    }
  };
  return (
    <div className="fixed top-0 left-0 h-full w-[321px] bg-white shadow-lg flex flex-col justify-between">
      <nav className="flex flex-col">
        <div className="p-2.5 flex justify-center mt-[51px] mb-[50px]">
          <Link to="/">
            <img
              src={props.role === "student" ? PredictLogo : PrepareLogo}
              alt={props.role === "student" ? "PredictLogo" : "PrepareLogo"}
              className="h-[73px] w-[272px]"
            />
          </Link>
        </div>
        {getMenu()}
      </nav>
      <div className="w-[135px] h-[38px] px-4 py-2 bg-dark-red hover:bg-light-red justify-center items-center gap-2.5 inline-flex mb-[40px] self-end mr-[15px]">
        <button
          className="text-white text-base font-normal font-marianne"
          onClick={(e) => logOut()}
        >
          Deconnexion
        </button>
      </div>
    </div>
  );
};

export default Navbar;
