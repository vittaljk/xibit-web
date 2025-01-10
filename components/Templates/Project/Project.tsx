import { IProject } from "@/components/Templates/Project";
import * as Molecules from "@/components/Molecules";
import * as Organisms from "@/components/Organisms";

interface IProjectProps {
  project: IProject;
}

function Project(props: IProjectProps) {
  const {
    project: {
      name,
      title,
      description,
      designCredits,
      heroImage,
      imageGallery,
    },
  } = props;

  return (
    <>
      <Molecules.HeroBanner
        designCredits={designCredits}
        heroImage={heroImage}
        name={name}
        title={title}
      />
      {description?.length > 0 && (
        <div className="p-6 md:container md:mx-auto md:px-4 md:py-16">
          {description.map((paragraph, index) => (
            <p key={index} className="mb-4" data-aos="fade-up">
              {paragraph}
            </p>
          ))}
        </div>
      )}
      <div className="p-6 md:container md:mx-auto md:px-4 md:pb-16">
        <Organisms.ImageGallery imageGallery={imageGallery} />
      </div>
    </>
  );
}

export default Project;
