// Top navigation (also reused in Footer → "Shop")
export const NAV_ITEMS = [
    { label: "Shop all", to: "/shop" },
    { label: "New arrivals", to: "/new" },
    { label: "Accessories", to: "/accessories" },
    { label: "Hot Sale", to: "/hot-sale" },
  ];
  
  // Footer "Company" links
  export const COMPANY_LINKS = [
    { label: "About us", to: "/about" },
    { label: "Contact us", to: "/contact" },
    { label: "Terms & Conditions", to: "/terms" },
    { label: "Privacy Policy", to: "/privacy" },
  ];
  
  // Footer contact block
  export const CONTACT = {
    addressLines: ["786 Acorn Drive, Harrisonburg,", "VA 22802, USA"],
    phone: "(+1) 329742389749",
    email: "example@example.com",
  };
  
  // Socials for footer
  import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
  export const SOCIALS = [
    { label: "Twitter", href: "#", Icon: FaTwitter },
    { label: "Facebook", href: "#", Icon: FaFacebookF },
    { label: "Instagram", href: "#", Icon: FaInstagram },
  ];
  