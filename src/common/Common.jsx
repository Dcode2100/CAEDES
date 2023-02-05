import { Facebook, Twitter, Pinterest, Instagram } from "@mui/icons-material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";



export const navlinks = [
    { id: 'Home', link: '/' },
    { id: 'Shop', link: '/shop' },
    { id: 'ContactUs', link: '/contactus' },
]

export const navlinks2 = [
  { id: "Cart", link: "/cart" , icon: <ShoppingCartIcon />},
  { id: "SignUp", link: "/signuppage" },
  { id: "Login", link: "/loginpage" },
  { id: "Account", link: "/profile", icon: <AccountBoxIcon /> },
];

export const smnavlinks = [
  { id: "Home", link: "/" },
  { id: "Shop", link: "/shop" },
  { id: "ContactUs", link: "/contactus" },
  { id: "Cart", link: "/cart", icon: <ShoppingCartIcon /> },
  { id: "Account", link: "/profile", icon: <AccountBoxIcon /> },
  { id: "SignUp", link: "/signuppage" },
  { id: "Login", link: "/loginpage" },
];

export const socialicon = [
    { id: 'facebook', icon: <Facebook /> },
    { id: 'twitter', icon: <Twitter /> },
    { id: 'pinterest', icon: <Pinterest /> },
    { id: 'instagram', icon: <Instagram /> },
]

export const footer1 = [

    { id: 'My account', link: '/account' },
    { id: 'My orders', link: '/Cart' },
]

export const footer2 = [
    { id : 'About us', link: '/about' },
    { id : 'Our team', link: '/contact' },
];

export const footer3 = [
    {id : 'Customer Service', link: '/about' },
    {id : 'Contact us', link: '/contact' },
]


export default { navlinks, navlinks2, socialicon, footer1, footer2, footer3};