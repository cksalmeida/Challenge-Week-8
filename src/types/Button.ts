import { detail } from "./Tmdb";

export interface buttonDefaultProps {
  img?: string;
  hoverImg?: string;
  alt?: string;
  children?: React.ReactNode;
  className?: string;
  detail?: detail | null;
  sessionId?: string | null;
  type?: string;
}
