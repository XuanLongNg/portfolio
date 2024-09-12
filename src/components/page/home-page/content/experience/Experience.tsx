"use client";
import { Flex, Row } from "antd";
import { ESectionHome } from "@/common/enums/section.enum";
import { useTheme } from "next-themes";
import TitleDivider from "@/components/common/title-divider/TitleDivider";
import ExperienceStyle from "@/components/page/home-page/content/experience/experience.style";
import Timeline from "@/components/common/timeline/Timeline";
import Text from "@/components/common/text/Text";
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  StopOutlined,
} from "@ant-design/icons";
import {
  EStatusProject,
  ETimelineType,
} from "@/common/enums/project-timeline.enum";
import { mockTimeline } from "@/mock/time-line";
import { IProject } from "@/common/interfaces/project-timeline.interface";
import Rive from "@rive-app/react-canvas";

export interface ITimeline {
  label: string;
  children: React.ReactNode;
  color?: string;
}
const statusProject = {
  [EStatusProject.PENDING]: {
    color: "gray",
    icon: <StopOutlined />,
  },
  [EStatusProject.IN_PROGRESS]: {
    color: "yellow",
    icon: <ClockCircleOutlined />,
  },
  [EStatusProject.COMPLETED]: {
    color: "green",
    icon: <CheckCircleOutlined />,
  },
};

const renderStatus = (status: EStatusProject) => {
  const { icon, color } = statusProject[status];
  const styled = {
    color: color,
  };
  return (
    <span style={styled}>{status[0].toUpperCase() + status.substring(1)}</span>
  );
};

const EndTimeline = ({ data }: { data: string }) => {
  return (
    <Flex vertical>
      <Text type="success" strong>
        {data}
      </Text>
    </Flex>
  );
};

const PositionTimeline = ({ data }: { data: string }) => {
  return (
    <Flex vertical>
      <Text type="success" strong>
        {data}
      </Text>
    </Flex>
  );
};

const ProjectTimeline = ({ data }: { data: IProject }) => {
  const draftTect = data.technology.reduce((pre, curr) => {
    return `${pre}${curr}, `;
  }, "");
  const technology = `${draftTect.substring(0, draftTect.length - 2)}.`;
  const responsibility = data.responsibility.map((data) => (
    <Text key={data}>{`- ${data}\n`}</Text>
  ));
  return (
    <Flex vertical>
      <Text type="success" strong>
        {data.company} - {data.name} &#183;&nbsp;
        {renderStatus(data.status)}
      </Text>
      <div>
        <Text type="warning">Technology:&nbsp;</Text>
        <Text>{technology}</Text>
      </div>
      <Flex vertical>
        <Text type="warning">My responsibility</Text>
        {responsibility}
      </Flex>
    </Flex>
  );
};
const timeline: ITimeline[] = mockTimeline
  .sort((a, b) => b.index - a.index)
  .map((data) => {
    const renderChildren = (() => {
      switch (data.type) {
        case ETimelineType.PROJECT:
          return <ProjectTimeline data={data.project as IProject} />;
        case ETimelineType.POSITION:
          return <PositionTimeline data={data.position as string} />;
        default:
          return <EndTimeline data={data.endTime as string} />;
      }
    })();
    return {
      label: data.time,
      children: renderChildren,
    };
  });
const Experience = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div id={ESectionHome.EXPERIENCE}>
      <ExperienceStyle>
        <TitleDivider orientation={"left"}>Experience</TitleDivider>
        <Row className={"container-content"}>
          <div className="animation">
            <Rive src={"/assets/pomodoro_design_variation.riv"} />
          </div>
          <div className="d-flex flex-row-reverse timeline">
            <Timeline mode={"left"} items={timeline} />
          </div>
        </Row>
        {/*<Row className="d-flex container-content">*/}
        {/*  <Timeline*/}
        {/*    tailColor={COLOR_MAIN_TEXT}*/}
        {/*    mode={"left"}*/}
        {/*    items={timeline}*/}
        {/*  />*/}
        {/*</Row>*/}
      </ExperienceStyle>
    </div>
  );
};
export default Experience;
