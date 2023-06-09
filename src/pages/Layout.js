import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <nav className={"flex justify-center text-red-600"}>
        {location.pathname === "/simulation" && (
          <Link className={""} to="/">
            Return
          </Link>
        )}

        {location.pathname === "/" && (
          <Link className={""} to="/simulation">
            Simulation
          </Link>
        )}
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
