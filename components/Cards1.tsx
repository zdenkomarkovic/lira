import { CardHeader, CardTitle, CardContent, Card } from "./ui/card";
import MotionComponent1 from "./MotionComponent1";
import { Cards1Data } from "@/constants/index";

const Cards1 = ({ title, data }: { title: string; data: Cards1Data[] }) => {
  return (
    <div className="">
      <div className="container px-5 mx-auto pt-8 md:pt-16 border-t border-primary space-y-6 md:space-y-16">
        <h2 className="text-3xl md:text-5xl text-center text-primary font-bold">
          {title}
        </h2>
        <div className="grid md:grid-cols-4 text-center gap-4 items-stretch">
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

export default Cards1;

const OneCard = ({ item }: { item: Cards1Data }) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-2xl md:text-3xl text-primary">
          {item.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-lg md:text-xl">
        <p>{item.text}</p>
      </CardContent>
    </Card>
  );
};
