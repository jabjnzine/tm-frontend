import { LayoutDashboard, ListTodo, Users, Dot } from "lucide-react";
import { type NavItem } from "@/types";

export const NavItems: NavItem[] = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-white",
  },
  {
    title: "User",
    icon: Users,
    href: "/user",
    color: "text-white",
    isChidren: true,
    children: [
      {
        title: "User List",
        icon: Dot,
        color: "text-white",
        href: "/todolist/children1",
      },
      {
        title: "Permission",
        icon: Dot,
        color: "text-white",
        href: "/todolist/children2",
      },
      {
        title: "KPI",
        icon: Dot,
        color: "text-white",
        href: "/todolist/children3",
      },
      {
        title: "Access Log",
        icon: Dot,
        color: "text-white",
        href: "/todolist/children3",
      },
    ],
  },
];
