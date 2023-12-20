// import DiariumDashboard from "/public/assets/image/hero/hero.webp";
import DiariumDashboard from "/public/assets/image/project/DiariumSuperApps/webp/DiariumDashboard.webp";
import DiariumLogin from "/public/assets/image/project/DiariumSuperApps/webp/DiariumLogin.webp";
import DiariumTask from "/public/assets/image/project/DiariumSuperApps/webp/DiariumTask.webp";
import DiariumCreateTask from "/public/assets/image/project/DiariumSuperApps/webp/DiariumCreateTask.webp";
import DiariumTaskDetail from "/public/assets/image/project/DiariumSuperApps/webp/DiariumTaskDetail.webp";
import BelajarKuySplashScreen from "/public/assets/image/project/BelajarKuy/webp/BelajarKuySplashScreen.webp";
import BelajarKuyLogin from "/public/assets/image/project/BelajarKuy/webp/BelajarKuyLogin.webp";
import BelajarKuyResetPass from "/public/assets/image/project/BelajarKuy/webp/BelajarKuyResetPass.webp";
import BelajarKuyOrder from "/public/assets/image/project/BelajarKuy/webp/BelajarKuyOrder.webp";
import BelajarKuyCart from "/public/assets/image/project/BelajarKuy/webp/BelajarKuyCart.webp";

// Convert images to strings
const DiariumImages = [
  DiariumDashboard.src,
  DiariumLogin.src,
  DiariumTask.src,
  DiariumCreateTask.src,
  DiariumTaskDetail.src,
];

const BelajarKuyImages = [
  BelajarKuyOrder.src,
  BelajarKuySplashScreen.src,
  BelajarKuyLogin.src,
  BelajarKuyResetPass.src,
  BelajarKuyCart.src,
];

const projectsData = [
  {
    title: "Diarium Super Apps",
    image: DiariumImages,
    description:
      "Diarium is a Human Resource application that is used and developed internally by PT. Telkom Indonesia, Tbk. One of its functions is to manage schedules, events and tasks. We want to make it easier for employees to integrate activity from a google account into Diarium (and vice versa). Diarium is currently not published on the google play store as this is an internal application and is protected by the company's Data Governance. Users need to link their google account into the Diarium application and according to their respective concerns. Then the Diarium application will read the agenda data on their google calendar and display it on the Diarium application.",
    stack: [
      "React",
      "Microfrontend",
      "Reactstrap",
      "Bootstrap CSS",
      "React hooks",
      "Redux",
      "React Suspense",
      "Router DOM v6",
      "Webpack",
      "Docker",
      "Nginx",
      "Geotaging",
      "GIT",
    ],
  },
  {
    title: "Belajar Kuy",
    image: BelajarKuyImages,
    description:
      "Belajar Kuy is an innovative course delivery app designed for students and knowledge enthusiasts. Similar to popular food delivery apps, Belajar Kuy allows users to effortlessly order courses, customizing their learning experience by choosing subjects like math, chemistry, and biology. With seamless email authentication and personalized user profiles, the app stores completed courses for easy reorder, accompanied by user ratings and reviews. Built with Flutter and powered by Firebase for authentication and database management, Belajar Kuy is evolving to offer secure payment gateways, ensuring a comprehensive and secure learning journey. ",
    stack: ["Flutter", "Dart", "Firebase", "GIT"],
  },
];

export default projectsData;
