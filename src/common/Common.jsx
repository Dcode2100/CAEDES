import { Facebook, Twitter, Pinterest, Instagram } from "@mui/icons-material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";




export const navlinks = [
  { n: 1, id: "Home", link: "/" },
  { n: 2, id: "Shop", link: "/shop" },
  { n: 3, id: "ContactUs", link: "/contactus" },
  { n: 4, id: "Cart", link: "/cart"},
  { n: 5, id: "Account", link: "/profile"},
  { n: 6, id: "SignUp", link: "/signuppage" },
  { n: 7, id: "Login", link: "/loginpage" },
];

export const socialicon = [
    { id: 'facebook',  icon: <Facebook /> },
    { id: 'twitter',   icon: <Twitter /> },
    { id: 'pinterest', icon: <Pinterest /> },
    { id: 'instagram', icon: <Instagram /> },
]

export const footer1 = [

    { id: 'My orders', link: '/profile/orders' },
    { id: 'Account Settings', link: '/profile/settings' },
    { id: 'Email preferences', link: '/profile/Emailpreference' },

]

export const footer2 = [

    { id : 'Our story', link: '/story' },
    { id : 'Careers', link: '/carrers' },
    { id : 'Home', link: './home'}
];

export const footer3 = [

    {id : 'Delivery', link: '/delivery' },
    {id : 'Returns & Refunds', link: '/returns' },
    {id : 'Contact us', link: '/Contactus' },
]


export default { navlinks, socialicon, footer1, footer2, footer3};