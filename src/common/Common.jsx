import { Facebook, Twitter, Pinterest, Instagram } from "@mui/icons-material";





export const navlinks = [
  {  id: "Home", link: "/" },
  {  id: "Shop", link: "/shop" },
  {  id: "Cart", link: "/cart"},
  {  id: "Signup", link: "/signuppage" },
  {  id: "Login", link: "/loginpage" },
  {  id: "Account", link: "/profile"},
];

export const categories = [
    { id: "Rubber Keychain"},
    { id: "3D Rubber Keychain"},
    { id: "Metal Keychain"},
    { id: "Wrist Band"},
    { id: "Label"},
    { id: "Silicon Patch"},
]


export const sorting = [
  { id: "Eligible for Pay On Delivery" },
  { id: "Latest" },
  { id: "Price Low" },
  { id: "Price High" },
  { id: "Rating" },
];
export const socialicon = [
    {  id: 'facebook',  icon: <Facebook /> },
    {  id: 'twitter',   icon: <Twitter /> },
    {  id: 'pinterest', icon: <Pinterest /> },
    {  id: 'instagram', icon: <Instagram /> },
]

export const footer1 = [

    {  id: 'My orders', link: '/profile/orders' },
    {  id: 'Account Settings', link: '/profile/settings' },
    {  id: 'Email preferences', link: '/profile/Emailpreference' },

]

export const footer2 = [

    { id : 'Our story', link: '/story' },
    { id : 'Careers', link: '/carrers' },
    { id : 'Home', link: './home'},
];

export const footer3 = [

    { id : 'Delivery', link: '/delivery' },
    { id : 'Returns & Refunds', link: '/returns' },
    { id : 'Contact us', link: '/Contactus' },
]


export default { navlinks, socialicon, footer1, footer2, footer3};