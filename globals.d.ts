import "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "calendar-date": React.HTMLAttributes<HTMLElement>;
      "calendar-month": React.HTMLAttributes<HTMLElement>;
    }
  }
}