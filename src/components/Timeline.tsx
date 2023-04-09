import tw from "tailwind-styled-components";
import AudioCard from "./AudioCard";
import TextCard from "./TextCard";

const TimeLine = tw.ol`
relative border-l border-gray-200 dark:border-gray-700
`;

const TimeLineItemContainer = tw.li`
mb-10 ml-6
`;

const TimeLineIcon = tw.span` 
absolute flex items-center justify-center w-4 h-4 bg-primary-100 rounded-full -left-2 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900
`;

const TimeLineItem = ({ children }: any) => {
  return (
    <TimeLineItemContainer>
      <TimeLineIcon />
      <div>
        <time className="block mb-2 text-xs font-thin leading-none text-slate-400 dark:text-gray-500">
          January 13th, 2022 08:20 AM
        </time>
        {children}
      </div>
    </TimeLineItemContainer>
  );
};

const Timeline = () => {
  return (
    <TimeLine>
      <TimeLineItem>
        <TextCard />
      </TimeLineItem>
      <TimeLineItem>
        <TextCard />
      </TimeLineItem>
      <TimeLineItem>
        <AudioCard />
      </TimeLineItem>
      <TimeLineItem>
        <AudioCard />
      </TimeLineItem>
      <TimeLineItem>
        <AudioCard />
      </TimeLineItem>
      <TimeLineItem>
        <AudioCard />
      </TimeLineItem>
      <TimeLineItem>
        <AudioCard />
      </TimeLineItem>
      <TimeLineItem>
        <AudioCard />
      </TimeLineItem>
    </TimeLine>
  );
};

export default Timeline;
