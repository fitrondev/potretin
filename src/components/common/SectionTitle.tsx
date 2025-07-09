import { cn } from "@/lib/utils";

type SectionTitleProps = {
  title: string;
  description?: string;
  className?: string;
};

const SectionTitle = ({ title, description, className }: SectionTitleProps) => {
  return (
    <div className={cn("mx-auto max-w-3xl text-center", className)}>
      <h2 className="text-foreground mb-4 text-3xl font-bold lg:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      )}
    </div>
  );
};

export default SectionTitle;
