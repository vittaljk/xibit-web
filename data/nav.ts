export interface INavMenuItem {
  id: string;
  title: string;
  href: string;
}

export const navMenuItems: INavMenuItem[] = [
  {
    id: "home",
    title: "Home",
    href: "/",
  },
  {
    id: "about",
    title: "About",
    href: "/about",
  },
  {
    id: "contact",
    title: "Contact",
    href: "/contact",
  },
  {
    id: "projects",
    title: "Projects",
    href: "/projects",
  },
];
