import { Bars3Icon, HomeIcon, UsersIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const iconPath = `${import.meta.env.BASE_URL}images/oj-lab-icon.svg`;

const navigation = [
  { name: "Problem", href: "/admin/problem", icon: HomeIcon },
  { name: "User", href: "/admin/user", icon: UsersIcon },
];

export const Drawer: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="drawer z-[1] w-fit lg:drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content fixed p-2 lg:hidden">
        <label htmlFor="my-drawer" className="btn btn-ghost drawer-button">
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        />
        <ul className="menu min-h-full w-80 bg-base-200 p-4 text-base-content">
          <div className="flex flex-row px-4 pb-2">
            <img
              className="mr-2 h-12 w-auto gap-4"
              src={iconPath}
              alt="OJ Lab"
            />
            <h1 className="self-center text-2xl font-bold">OJ Lab Admin</h1>
          </div>
          {navigation.map((item) => (
            <li key={item.name}>
              <div onClick={() => navigate(item.href)}>
                <item.icon className="h-6 w-6 shrink-0" />
                {t(item.name)}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
