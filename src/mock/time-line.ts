import { ITimelineCommon } from "@/common/interfaces/project-timeline.interface";
import {
  EStatusProject,
  ETimelineType,
} from "@/common/enums/project-timeline.enum";
import { ECompany } from "@/common/enums/company.enum";

export const mockTimeline: ITimelineCommon[] = [
  {
    index: 1,
    type: ETimelineType.POSITION,
    time: "04-2022",
    position: "Core member in Code MeLy",
  },
  {
    index: 2,
    type: ETimelineType.POSITION,
    time: "04-2022",
    position: "Web developer in Technical Team - Code MeLy",
  },
  {
    index: 3,
    type: ETimelineType.PROJECT,
    time: "09-2022",
    project: {
      name: "Landing Page",
      company: ECompany.CODE_MELY,
      status: EStatusProject.COMPLETED,
      technology: ["ReactJs", "Firebase Firestore", "Firebase Storage"],
      responsibility: ["Develop features, build single page."],
    },
  },
  {
    index: 4,
    type: ETimelineType.END_TIME,
    time: "12-2022",
    endTime: "End Landing Page",
  },
  {
    index: 5,
    type: ETimelineType.PROJECT,
    time: "04-2023",
    project: {
      name: "CTF web",
      company: ECompany.CODE_MELY,
      status: EStatusProject.PENDING,
      technology: ["NextJs", "ExpressJs", "PostgreSql"],
      responsibility: ["Develop features, build UI/UX."],
    },
  },
  {
    index: 6,
    type: ETimelineType.PROJECT,
    time: "7-2023",
    project: {
      name: "Ecommerce MeLy",
      company: ECompany.CODE_MELY,
      status: EStatusProject.PENDING,
      technology: ["NextJs", "ExpressJs", "PostgreSql"],
      responsibility: ["Develop features, build UI/UX."],
    },
  },
  {
    index: 7,
    type: ETimelineType.POSITION,
    time: "11-2023",
    position: "Internship in Tinasoft",
  },
  {
    index: 8,
    type: ETimelineType.PROJECT,
    time: "07-11-2023",
    project: {
      name: "NuMessage",
      company: ECompany.TINASOFT,
      status: EStatusProject.COMPLETED,
      technology: ["NestJs", "NextJs", "MongoDB", "S3", "Redis"],
      responsibility: [
        "Develop features.",
        "Participate in building flows and operations.",
        "Database design.",
      ],
    },
  },
  {
    index: 9,
    type: ETimelineType.PROJECT,
    time: "02-2024",
    project: {
      name: "MeLy Blog",
      company: ECompany.CODE_MELY,
      status: EStatusProject.IN_PROGRESS,
      technology: [
        "NextJs",
        "NestJs",
        "PostgreSql",
        "Firebase Storage",
        "Redis",
        "CkEditor",
      ],
      responsibility: [
        "Develop features, build UI/UX.",
        "Build src base, design database.",
        "Participate in building flows and operations.",
        "Testing.",
        "Review code.",
      ],
    },
  },
  {
    index: 10,
    type: ETimelineType.END_TIME,
    time: "27-02-2024",
    endTime: "End NuMessage",
  },
  {
    index: 11,
    type: ETimelineType.PROJECT,
    time: "06-2024",
    project: {
      name: "VDA",
      company: ECompany.TINASOFT,
      status: EStatusProject.IN_PROGRESS,
      technology: ["NuxtJs", "Lavarel", "Mysql", "S3", "Redis", "Spring"],
      responsibility: [
        "Develop features, build UI/UX.",
        "Participate in building flows and operations.",
        "Write solution documents.",
        "Testing.",
      ],
    },
  },
  {
    index: 12,
    type: ETimelineType.PROJECT,
    time: "08-2024",
    project: {
      name: "Laos Shop",
      company: ECompany.TINASOFT,
      status: EStatusProject.IN_PROGRESS,
      technology: ["NextJs", "NestJs", "MongoDB", "S3", "Redis"],
      responsibility: [
        "Develop features.",
        "Participate in building flows and operations.",
        "Database design.",
      ],
    },
  },
  {
    index: 13,
    type: ETimelineType.POSITION,
    time: "09-2024",
    position: "Backend developer in Tinasoft",
  },
];
