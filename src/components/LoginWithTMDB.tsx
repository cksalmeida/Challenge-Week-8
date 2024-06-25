import { FunctionComponent, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const LoginWithTMDB: FunctionComponent<Props> = ({ children }) => {
  return (
    <a
      href="#"
      className="block w-96 h-12 py-3 text-base bg-primary-300 rounded border-white tracking-[0.14rem]"
    >
      {children}
    </a>
  );
};

export default LoginWithTMDB;
