import { Breadcrumbs, BreadcrumbItem } from "@heroui/breadcrumbs";
import Link from "next/link";
import { useRouter } from "next/router";

import { projects } from "@/data";

function Breadcrumb() {
  const router = useRouter();

  // Split the resolved path (with parameter values) into segments
  const asPathSegments = router.asPath.split("/").filter((segment) => segment);

  // Use `router.pathname` to identify dynamic segments
  const pathSegments = router.pathname.split("/").filter((segment) => segment);

  // Helper to get the project name by ID
  const getProjectNameById = (id: string) => {
    const project = projects.find((p) => p.id === id);

    return project ? project.name : id; // Fallback to the ID if the name is unavailable
  };

  // Helper to construct the display name for each breadcrumb item
  const getBreadcrumbName = (segment: string) => {
    // Replace dynamic keys like `[id]` with actual values from `router.query`
    if (segment.startsWith("[") && segment.endsWith("]")) {
      const paramName = segment.slice(1, -1); // Extract the parameter name (e.g., `id`)

      // Check if the segment corresponds to a project ID
      if (paramName === "id" && typeof router.query[paramName] === "string") {
        return getProjectNameById(router.query[paramName]); // Replace ID with name
      }

      return typeof router.query[paramName] === "string"
        ? router.query[paramName]
        : segment; // Fallback to the key itself if value is unavailable
    }

    return segment; // Static segment
  };

  // Helper to construct the full path for each segment
  const buildPath = (index: number) =>
    "/" + asPathSegments.slice(0, index + 1).join("/");

  return (
    <Breadcrumbs
      color="primary"
      itemClasses={{
        item: "text-sm",
      }}
      separator="/"
    >
      {/* Home breadcrumb */}
      <BreadcrumbItem>
        <Link href="/">Home</Link>
      </BreadcrumbItem>

      {/* Dynamic breadcrumbs based on the current route */}
      {pathSegments.map((segment, index) => (
        <BreadcrumbItem key={index}>
          <Link href={buildPath(index)}>
            {/* Capitalize the breadcrumb name */}
            {getBreadcrumbName(segment).toString().charAt(0).toUpperCase() +
              getBreadcrumbName(segment).slice(1)}
          </Link>
        </BreadcrumbItem>
      ))}
    </Breadcrumbs>
  );
}

export default Breadcrumb;
