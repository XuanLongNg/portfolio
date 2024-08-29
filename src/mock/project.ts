import { skillsConstant } from "@/common/constants/skill.constant";

export const mockProjects = [
  {
    title: "Webchat",
    description:
      "Webchat is a real-time messaging application that allows users to send and receive messages instantly",
    link: "https://github.com/XuanLongNg/Webchat.git",
    technical: [
      skillsConstant.typescript,
      skillsConstant.react,
      skillsConstant["ant-design"],
      skillsConstant["express-js"],
      skillsConstant["firebase-realtime"],
      skillsConstant["firebase-firestore"],
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/web-chat-neil.appspot.com/o/Screenshot%202024-07-24%20022015.png?alt=media&token=d6a9777b-d11b-454a-8dd5-eed728cd95b5",
  },
  {
    title: "Portfolio",
    description: "The Portfolio project built with react",
    link: "https://github.com/XuanLongNg/portfolio.git",
    technical: [
      skillsConstant.react,
      skillsConstant.rive,
      skillsConstant["ant-design"],
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/web-chat-neil.appspot.com/o/Screenshot%202024-07-24%20011904.png?alt=media&token=38cc0d82-3ae0-4854-8195-128dfd8f451f",
  },
  {
    title: "Fireboy & Watergirl",
    description:
      "Project clone of Fireboy & Watergirl game with main functions and map creation function",
    link: "https://github.com/XuanLongNg/Fireboy-and-Watergirl.git",
    technical: [skillsConstant.python],
    image:
      "https://firebasestorage.googleapis.com/v0/b/web-chat-neil.appspot.com/o/images.jpg?alt=media&token=b2c8294b-17cb-45f9-ad04-c1af4d15ef64",
  },
  {
    title: "Library Web",
    description:
      "A library website with the function of buying and selling books for users and managing books for admin",
    link: "https://github.com/XuanLongNg/library_management.git",
    technical: [
      skillsConstant.react,
      skillsConstant["express-js"],
      skillsConstant.mysql,
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/web-chat-neil.appspot.com/o/Screenshot%202024-07-24%20021403.png?alt=media&token=b5de810b-3efb-4dc1-9668-206a30e5fc02",
  },
];
