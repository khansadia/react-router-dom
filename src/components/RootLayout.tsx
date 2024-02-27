import { Outlet } from "react-router-dom";
import { IRoute } from "../interfaces";
import { Header } from "./Header";

const links: IRoute[] = [
  {
    id: 1,
    name: "Random Beer",
    path: "/",
  },
  {
    id: 2,
    name: "Search Page",
    path: "/search",
  },
];

const RootLayout = () => {
  return (
    <>
      <Header links={links} />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
