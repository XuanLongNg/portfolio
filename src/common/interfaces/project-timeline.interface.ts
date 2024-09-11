import {
  EStatusProject,
  ETimelineType,
} from "@/common/enums/project-timeline.enum";

export interface IProject {
  name: string;
  company: string;
  technology: string[];
  responsibility: string[];
  status: EStatusProject;
}
export interface ITimelineCommon {
  index: number;
  type: ETimelineType;
  time: string;
  position?: string;
  endTime?: string;
  project?: IProject;
}
