import { Link } from "react-router-dom";
import { MdOutlineAccountBalance } from "react-icons/md";
import { BiBookBookmark } from "react-icons/bi";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineGift,
} from "react-icons/ai";
import { useAuth } from "../../contexts/AuthProvider";
const SideMenu = () => {
  const [auth] = useAuth();

  return (
    <div>
      <h2 className="text-md text-center mb-4">
        Hello{" "}
        <span className="text-secondary capitalize">{auth?.user.username}</span>
      </h2>
      <ul className="menu">
        <li>
          <Link to="/user/dashboard/myProfile">
            <span className="text-2xl">
              <MdOutlineAccountBalance />
            </span>
            <span>Management My Account</span>
          </Link>
          <ul>
            <li>
              <Link to="/user/dashboard/myProfile">My Profile</Link>
            </li>
            <li>
              <Link to="/user/dashboard/editProfile">Edit Profile</Link>
            </li>
            <li>
              <Link to="/user/dashboard/changePassword">Change Password</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/user/dashboard/wishList">
            <span className="text-2xl">
              <AiOutlineHeart />
            </span>
            <span>My Wish list</span>
          </Link>
        </li>
        <li>
          <Link to="/user/dashboard/cartList">
            <span className="text-2xl">
              <AiOutlineShoppingCart />
            </span>
            <span>My Card list</span>
          </Link>
        </li>
        <li>
          <Link to="/user/dashboard/orderList">
            <span className="text-2xl">
              <AiOutlineGift />
            </span>
            <span>My Order</span>
          </Link>
        </li>

        <li>
          <Link to="/user/dashboard/miscellaneous">
            <span className="text-2xl">
              <BiBookBookmark />
            </span>
            <span>Miscellaneous</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
