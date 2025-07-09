import { stats_data } from "@/constants/data";

const AboutStats = () => {
  return (
    <div className="border-border/50 border-t pt-12">
      <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
        {stats_data.map((stat, index) => (
          <div key={index} className="space-y-2">
            <div className="text-primary text-3xl font-bold lg:text-4xl">
              {stat.value}
            </div>
            <div className="text-muted-foreground text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutStats;
