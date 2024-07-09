import {
  BadgeAlert,
  CalendarCheck,
  Kanban,
  LucideProps,
  Users2,
} from "lucide-react";

export const SIDEBAR_ITEMS = [
  {
    link: "/project",
    name: "Projets",
    icon: ({ ...props }: LucideProps) => <CalendarCheck {...props} />,
  },
  {
    link: "/board",
    name: "Kanban",
    icon: ({ ...props }: LucideProps) => <Kanban {...props} />,
  },
  {
    link: "/issue",
    name: "Tasks",
    icon: ({ ...props }: LucideProps) => <BadgeAlert {...props} />,
  },
  {
    link: "/team",
    name: "Teams",
    icon: ({ ...props }: LucideProps) => <Users2 {...props} />,
  },
];

export type SidebarItem = (typeof SIDEBAR_ITEMS)[number];
