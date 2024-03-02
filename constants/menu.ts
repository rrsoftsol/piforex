import { v4 as uuidv4 } from "uuid";

export const headerMenu = [
   
  {
    id: uuidv4(),
    name: "Buy Forex",
    isSubmenu: false,
    icon: "ri-home-3-line",
    link: "/buy-forex" 
    
  },
  {
    id: uuidv4(),
    name: "Sell Forex",
    isSubmenu: false,
    icon: "ri-home-3-line",
    link: "/sell-forex"     
  },
  {
    id: uuidv4(),
    name: "Remittances",
    isSubmenu: false,
    icon: "ri-home-3-line",
    link: "/remittances" 
  },
  {
    id: uuidv4(),
    name: "Membership services",
    isSubmenu: false,
    icon: "ri-home-3-line",
    link: "/membership-services" 
  },
  {
    id: uuidv4(),
    name: "About us",
    isSubmenu: false,
    link: "/about",
    icon: "ri-home-3-line",
    
  },{
    id: uuidv4(),
    name: "Contact Us",
    isSubmenu: false,
    icon: "ri-home-3-line",    
    link: "/contact",
  } 
  
];

export const footerLinks = [
  {
    id: uuidv4(),
    title: "Quick Links",
    links: [
      {
        id: uuidv4(),
        name: "Buy Forex",
        link: "/buy-forex",
      },
      {
        id: uuidv4(),
        name: "Sell Forex",
        link: "/sell-forex",
      },
      {
        id: uuidv4(),
        name: "Remittances",
        link: "/remittances",
      },
      {
        id: uuidv4(),
        name: "Membership services",
        link: "/membership-services",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Company",
    links: [
      {
        id: uuidv4(),
        name: "About",
        link: "/about",
      },
      {
        id: uuidv4(),
        name: "Contact",
        link: "/contact",
      },
      {
        id: uuidv4(),
        name: "Careers",
        link: "/careers",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Legal",
    links: [
      {
        id: uuidv4(),
        name: "Terms & Conditions",
        link: "/terms-conditions",
      },
      {
        id: uuidv4(),
        name: "Privacy & Policy",
        link: "privacy-policy",
      },
      {
        id: uuidv4(),
        name: "Contact",
        link: "/contact",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Contact Us",
    links: [
      {
        id: uuidv4(),
        name: "info@piforex.com",
        link: "mailto:info@piforex.com",
      },
      {
        id: uuidv4(),
        name: "+1800 889 2499 ",
        link: "tel:+1800 889 2499 ",
      },
    ],
  },
];
