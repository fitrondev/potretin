import { LucideIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

interface ContactCardProps {
  type: string;
  label: string;
  value: string;
  icon: LucideIcon;
  href?: string;
}

const ContactCard = ({ label, value, icon: Icon, href }: ContactCardProps) => {
  const CardWrapper = ({ children }: { children: React.ReactNode }) => (
    <Card className="group h-full gap-4 overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <CardContent className="flex flex-col items-center p-8 text-center">
        {children}
      </CardContent>
    </Card>
  );

  const content = (
    <>
      {/* Icon */}
      <div className="bg-primary/10 ring-primary/5 group-hover:bg-primary/15 group-hover:ring-primary/10 mb-6 flex h-16 w-16 items-center justify-center rounded-full ring-4 transition-all duration-300">
        <Icon className="text-primary h-8 w-8 transition-transform duration-300 group-hover:scale-110" />
      </div>

      {/* Label */}
      <h3 className="text-foreground group-hover:text-primary mb-3 text-lg font-bold transition-colors duration-300">
        {label}
      </h3>

      {/* Value */}
      <p className="text-muted-foreground text-center leading-relaxed break-words">
        {value}
      </p>
    </>
  );

  if (href) {
    return (
      <a href={href} className="group block">
        <CardWrapper>{content}</CardWrapper>
      </a>
    );
  }

  return <CardWrapper>{content}</CardWrapper>;
};

export default ContactCard;
