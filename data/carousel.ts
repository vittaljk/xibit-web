import { projects } from "./projects";

export interface ICarouselItem {
  id: string;
  imagePath: string;
  caption?: string;
}

export const homeCarouselItems: ICarouselItem[] = [
  {
    id: "ishavasya",
    imagePath: projects.find((project) => project.id === "ishavasya")
      ?.heroImage as string,
    caption: "Ishavasya",
  },
  {
    id: "the-pavilion",
    imagePath: projects.find((project) => project.id === "the-pavilion")
      ?.heroImage as string,
    caption: "The Pavilion",
  },
  {
    id: "the-new-york-loft",
    imagePath: projects.find((project) => project.id === "the-new-york-loft")
      ?.heroImage as string,
    caption: "The New York Loft",
  },
];

export const aboutUsCarouselItems: ICarouselItem[] = [
  {
    id: "ishavasya",
    imagePath: projects.find((project) => project.id === "ishavasya")
      ?.heroImage as string,
    caption: "Ishavasya",
  },
  {
    id: "the-pavilion",
    imagePath: projects.find((project) => project.id === "the-pavilion")
      ?.heroImage as string,
    caption: "The Pavilion",
  },
  {
    id: "the-new-york-loft",
    imagePath: projects.find((project) => project.id === "the-new-york-loft")
      ?.heroImage as string,
    caption: "The New York Loft",
  },
];
