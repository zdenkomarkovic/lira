import { Cards2Data } from "@/constants/index";
import { CardContent, Card } from "./ui/card";
import MotionComponent1 from "./MotionComponent1";

const Cards2Kosina = ({
  title,
  data,
}: {
  title: string;
  data: Cards2Data[];
}) => {
  return (
    <div className="">
      <div className="container px-5 mx-auto py-7 md:py-10 border-t border-primary space-y-10 md:space-y-20">
        <h2 className="">{title}</h2>
        <div className="grid md:grid-cols-4 text-center gap-3 md:gap-5 items-stretch">
          {data.map((item) => {
            return (
              <MotionComponent1 key={item.id}>
                <OneCard key={item.id} item={item} />
              </MotionComponent1>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards2Kosina;

const OneCard = ({ item }: { item: Cards2Data }) => {
  const IconComponent = item.icon;

  return (
    <Card className="h-full relative overflow-hidden py-5 ">
      <svg
        className="absolute inset-0 w-full h-full text-card"
        viewBox="0 0 256 160"
        preserveAspectRatio="none"
      >
        <polygon points="0,0 256,0 192,160 0,160" fill="#f5f5f5" />
      </svg>

      <CardContent
        className="relative z-10 flex gap-3 items-center justify-start
      "
      >
        {/* <div className="text-3xl md:text-4xl text-primary">
          <IconComponent className="" />
        </div> */}
        <p className=" text-left text-primary">{item.title}</p>
      </CardContent>
    </Card>
  );
};
