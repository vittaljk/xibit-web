import { IImageGalleryPicture } from "@/components/Organisms";

export enum EDesignCredits {
  Spellbound = "Spellbound",
}

export interface IProject {
  id: string;
  name: string;
  designCredits?: EDesignCredits[];
  description: string[];
  title?: string;
  heroImage: string;
  imageGallery: IImageGalleryPicture[];
}
