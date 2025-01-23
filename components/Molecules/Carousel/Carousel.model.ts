import { ICarouselItem } from "@/data";

export interface ICarouselProps {
  activeIndex?: number;
  carouselItems?: ICarouselItem[];
  interval?: number;
  showArrows?: boolean;
  showIndicators?: boolean;
  autoPlay?: boolean;
  infiniteLoop?: boolean;
  heightClass?: string;
  lazyLoadImages?: boolean;
  overlayBackground?: boolean;
  imageObjectFit?: "cover" | "contain";
}
