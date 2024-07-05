import { MouseEventHandler } from "react";

const handleRedirect = <T extends HTMLElement |SVGElement>(
  linkType: "website" | "email",
  url: string
): MouseEventHandler<T> => {
  return (event) => {
    if (linkType === "website") {
      window.open(url, "_blank");
    } else if (linkType === "email") {
      window.open(`mailto:${url}`);
    }
  };
};

export { handleRedirect };
