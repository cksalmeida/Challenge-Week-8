declare module "@splidejs/react-splide" {
  import * as React from "react";

  interface SplideOptions {
    type?: "loop" | "slide" | "fade";
    perPage?: number;
    autoplay?: boolean;
    direction?: "ltr" | "rtl" | "ttb" | "btt";
    rewind?: boolean;
    rewindByDrag?: boolean;
    arrows?: boolean;
    start?: boolean;
  }

  interface SplideProps {
    options?: SplideOptions;
    children?: React.ReactNode;
    tag?: string;
  }

  export class Splide extends React.Component<SplideProps> {}

  interface SplideSlideProps {
    className?: string;
    children?: React.ReactNode;
  }

  export class SplideSlide extends React.Component<SplideSlideProps> {}
}
