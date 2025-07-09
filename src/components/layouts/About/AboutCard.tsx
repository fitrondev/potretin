import { about_features } from "@/constants/data";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const AboutCard = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {about_features.map((feature, index) => (
        <Card key={index} className="gap-4 text-center shadow-md">
          <CardHeader>
            <div className="text-primary mb-4 flex justify-center">
              <feature.icon className="h-8 w-8" />
            </div>

            <CardTitle className="text-lg font-semibold">
              {feature.title}
            </CardTitle>
          </CardHeader>

          <CardContent>
            <CardDescription className="text-sm leading-relaxed">
              {feature.description}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AboutCard;
