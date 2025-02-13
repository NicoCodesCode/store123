import { AppBar, Badge, IconButton } from "@mui/material";
import { FaShoppingCart } from "react-icons/fa";
import { Link, Outlet } from "react-router";
import CartBadge from "./CartBadge";

export default function NavBar() {
  return (
    <>
      <AppBar>
        <nav className="max-h-14 px-4 py-2 flex justify-between items-center">
          <Link to="/">
            <h1 className="text-3xl font-bold font-poppins sm:text-4xl">
              Store123
            </h1>
          </Link>
          <Link to="/cart">
            <div className="rounded-lg transition ease-out hover:bg-blue-800">
              <IconButton sx={{ color: "white" }}>
                <Badge badgeContent={<CartBadge />}>
                  <FaShoppingCart />
                </Badge>
              </IconButton>
            </div>
          </Link>
        </nav>
      </AppBar>
      <Outlet />
    </>
  );
}
