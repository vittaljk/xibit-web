import React from "react";

export interface IAboutUsDetail {
  id: number;
  title: JSX.Element;
}

export const aboutUsDetails: IAboutUsDetail[] = [
  {
    id: 1,
    title: (
      <p>
        At x'ibit, we believe every space holds the potential to be transformed
        into a refined and inspiring environment. Rooted in a commitment to
        excellence, we offer a{" "}
        <b>
          complete spectrum of services—constructing new homes from concept to
          completion, refurbishing existing spaces, and crafting interiors
        </b>{" "}
        that harmonize design with purpose.
      </p>
    ),
  },
  {
    id: 2,
    title: (
      <p>
        Driven by a philosophy of thoughtful transformation, our approach
        ensures every project evolves seamlessly from the initial idea to a
        space that reflects your unique tastes and needs. Whether building a new
        home, breathing life into an existing one, or designing bespoke
        interiors, our work embodies precision, attention to detail, and a deep
        understanding of your vision.
      </p>
    ),
  },
  {
    id: 3,
    title: (
      <p>
        We collaborate with a network of skilled designers who share our passion
        for excellence. From matching you with the right designer to
        meticulously managing every aspect of execution, we ensure a seamless
        process that emphasizes quality, care, and adaptability. Our commitment
        extends to sourcing premium materials, refining every detail, and
        delivering results that exceed expectations.
      </p>
    ),
  },
  {
    id: 4,
    title: (
      <p>
        With x'ibit, you’re not just shaping a space—you’re creating a home that
        enhances your lifestyle. Whether it’s a new construction, a renovation,
        or an interior revamp, we bring to life environments that embody
        elegance, functionality, and the unique warmth of thoughtful design. Let
        us partner with you to craft a space that offers lasting satisfaction
        and timeless appeal.
      </p>
    ),
  },
];
