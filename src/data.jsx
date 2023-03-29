import nyanCat from "./assets/nyan-cat.gif";
/* import react-icons */
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub,
  AiFillYoutube,
} from "react-icons/ai";

/* ================= DATA ===================== */
export const nav = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Search",
    path: "/search",
  },
  {
    id: 3,
    name: "Sticker",
    path: "/sticker",
  },
  {
    id: 4,
    name: "Contact",
    path: "/contact",
  },
];

export const banner = {
  smallTitle: "Gifs universe",
  Title: "giphy - be animated",
  desc: "GIPHY is not just GIFs... we are Stickers, Arcade, Clips, and much more. Every day, we are serving 10+ billion pieces of GIPHY content to a daily user reach of 700+ million people, helping them express themselves and make their everyday conversations more entertaining.",
  btn1: "Explore now",
  img: nyanCat,
};

export const category = [
  {
    id: 1,
    type: "dogs",
  },
  {
    id: 2,
    type: "cats",
  },
  {
    id: 3,
    type: "cheems",
  },
  {
    id: 4,
    type: "pixel",
  },
  {
    id: 5,
    type: "memes",
  },
];

export const footer = {
  social: [
    <AiFillFacebook />,
    <AiFillInstagram />,
    <AiFillLinkedin />,
    <AiFillYoutube />,
    <AiFillGithub />,
  ],
  details: [
    {
      id: 1,
      title: "Product",
      links: [
        "Landing Page",
        "Popup Builder",
        "Web-design",
        "Content",
        "Integrations",
      ],
    },
    {
      id: 2,
      title: "Use Cases",
      links: [
        "Web-designers",
        "Marketerser",
        "Small Business",
        "Website Builder",
      ],
    },
    {
      id: 3,
      title: "Company",
      links: ["About Us", "Careers", "Terms", "Contact Us", "Team"],
    },
    {
      id: 4,
      title: "Resources",
      links: ["About Us", "Careers", "Terms", "Contact Us", "Team"],
    },
  ],
};
