import styles from "./Image.module.scss";

interface IImageProps {
  path: string;
  alt?: string;
  width?: number;
  height?: number;
  imgClassName?: string;
  lazy?: boolean;
  crop?: "fill" | "fit" | "scale";
}

function Image(props: IImageProps) {
  const { path, alt, lazy = false } = props;

  // Cloudinary transformations
  //   const transformations = [
  //     `w_${width}`,
  //     height ? `h_${height}` : null,
  //     `c_${crop}`, // Crop mode
  //     "q_auto", // Automatic quality adjustment
  //     "f_auto", // Automatic format selection (e.g., WebP)
  //   ]
  //     .filter(Boolean) // Remove null/undefined values
  //     .join(",");

  //   // Construct the optimized URL
  //   const optimizedSrc = path.replace("/upload/", `/upload/${transformations}/`);

  return (
    <div>
      <img
        // src={optimizedSrc}
        alt={alt}
        className={styles.image}
        // height={height}
        loading={lazy ? "lazy" : "eager"}
        src={path}
        // width={width}
      />
    </div>
  );
}

export default Image;
