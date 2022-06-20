import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilUsdSquare,
  UilMoneyWithdrawal,
} from "@iconscout/react-unicons";
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

export const sidebarData = [
  {
    icon: UilEstate,
    headding: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    headding: "Orders",
  },
  {
    icon: UilUsersAlt,
    headding: "Customers",
  },
  {
    icon: UilPackage,
    headding: "Products",
  },
  {
    icon: UilChart,
    headding: "Analytics",
  },
];

export const CardsData = [
  {
    title: "Sales",
    color: {
      background: "linear-gradient(180deg , #bb67ff 0% , #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 75,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      background: "linear-gradient(180deg , #FF919D 0% , #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      background:
        "linear-gradient(rgb(248, 212, 154) -146.42% , rgb(255, 202, 113) -46.42%",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

export const UpdateData = [
  {
    name: "Androw Thomas",
    img: img1,
    noti: "has Orderd Apple Smart Phone 2500mh Battery",
    time: "25 minutes ago",
  },
  {
    name: "Jem Thomas",
    img: img2,
    noti: "has Orderd Apple Smart Watch ",
    time: "32 minutes ago",
  },
  {
    name: "Rock Jee",
    img: img3,
    noti: "has Orderd Apple Charger ",
    time: "45 minutes ago",
  },
];
