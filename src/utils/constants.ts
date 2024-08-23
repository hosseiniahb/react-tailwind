import { BiHome } from "react-icons/bi";
import {
  RiBarChartFill,
  RiJavascriptFill,
  RiMovieFill,
  RiMusicFill,
  RiNextjsFill,
  RiReactjsFill,
  RiTShirtFill,
} from "react-icons/ri";
import { MdCastForEducation, MdSportsBasketball } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { T_SidebarLink } from "../types";
import { PiTelevisionFill } from "react-icons/pi";

// Logo Website
export const logo: string = "/logo.svg";

// Demo banner for when the selected channel does not have a special banner
export const demoBannerChannel: string = "/demoBannerChannel.webp";

// Thumbnail demo for when some videos don't have a specific thumbnail
export const demoThumbnail: string = "/thumbnail.jpg";

// Category links in sidebar
export const sidebarLinks: T_SidebarLink[] = [
  {
    label: "New",
    icon: BiHome,
  },
  {
    label: "Javascript",
    icon: RiJavascriptFill,
  },
  {
    label: "React JS",
    icon: RiReactjsFill,
  },
  {
    label: "Next JS",
    icon: RiNextjsFill,
  },
  {
    label: "Music",
    icon: RiMusicFill,
  },
  {
    label: "Education",
    icon: MdCastForEducation,
  },
  {
    label: "Movie",
    icon: RiMovieFill,
  },
  {
    label: "Fashion",
    icon: RiTShirtFill,
  },
  {
    label: "Sports",
    icon: MdSportsBasketball,
  },
  {
    label: "Live",
    icon: PiTelevisionFill,
  },
  {
    label: "Gym",
    icon: CgGym,
  },
  {
    label: "Financial",
    icon: RiBarChartFill,
  },
];
