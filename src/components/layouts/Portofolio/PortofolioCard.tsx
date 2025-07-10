import Image from "next/image";

import { EyeIcon } from "lucide-react";

import {
  PortofolioItem,
  portofolio_categories,
  portofolio_data,
} from "@/constants/data";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PortofolioCard = () => {
  const getFilteredPortfolio = (category: string): PortofolioItem[] => {
    const filtered =
      category === "Semua"
        ? portofolio_data
        : portofolio_data.filter(item => item.category === category);

    // Limit to 8 items for "Semua" category
    return category === "Semua" ? filtered.slice(0, 8) : filtered;
  };

  return (
    <Tabs defaultValue="Semua" className="w-full space-y-8">
      <TabsList className="mx-auto grid max-w-3xl grid-cols-5">
        {portofolio_categories.map(category => (
          <TabsTrigger key={category} value={category} className="text-sm">
            {category}
          </TabsTrigger>
        ))}
      </TabsList>

      {portofolio_categories.map(category => (
        <TabsContent key={category} value={category}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {getFilteredPortfolio(category).map(item => (
              <Dialog key={item.id}>
                <DialogTrigger asChild>
                  <Card className="group cursor-pointer gap-4 overflow-hidden border-0 py-0 shadow-md transition-all duration-300 hover:shadow-xl">
                    <CardHeader className="relative aspect-square overflow-hidden">
                      <Image
                        src={item.image_url}
                        alt={item.title}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/40">
                        <div className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <EyeIcon className="h-8 w-8 text-white" />
                        </div>
                      </div>

                      <div className="absolute top-3 right-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <Badge variant="default" className="text-xs">
                          {item.category}
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="p-4">
                      <h3 className="text-foreground mb-2 line-clamp-1 font-semibold">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground line-clamp-2 text-sm">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </DialogTrigger>

                <DialogContent className="mx-auto w-[calc(100vw-2rem)] max-w-4xl sm:w-full">
                  <DialogHeader>
                    <DialogTitle>{item.title}</DialogTitle>
                    <DialogDescription>{item.description}</DialogDescription>
                  </DialogHeader>

                  <Carousel className="relative">
                    <CarouselContent>
                      {item.image_list.map((imageUrl, imageIndex) => (
                        <CarouselItem key={imageIndex}>
                          <div className="space-y-4">
                            <div className="relative aspect-video overflow-hidden rounded-lg">
                              <Image
                                src={imageUrl}
                                alt={`${item.title} - Image ${imageIndex + 1}`}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="text-center">
                              <p className="text-muted-foreground text-sm">
                                {imageIndex + 1} / {item.image_list.length}
                              </p>
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-5" />
                    <CarouselNext className="right-5" />
                  </Carousel>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default PortofolioCard;
