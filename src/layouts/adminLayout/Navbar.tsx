import UserMenu from "../UserMenu";
import LanguageMenu from "../LanguageMenu";
import DarkLightToggle from "../DarkLightToggle";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl: `${import.meta.env.BASE_URL}avatars/male-avatar-1.svg`,
};
const userNavigation = [
  { name: "Main page", href: "/problem" },
  { name: "Sign out", href: "#" },
];

const Navbar: React.FC = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="ml-80 flex flex-1 justify-end">
          <div className="flex flex-row items-center justify-center gap-2">
            <LanguageMenu />
            <DarkLightToggle />
            <UserMenu avatarUrl={user.imageUrl} navigation={userNavigation} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
