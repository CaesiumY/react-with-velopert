import { createContext, useContext } from "react";

const PreloadContext = createContext(null);
export default PreloadContext;

export const Preloader = ({ resolve }) => {
  const preloadContext = useContext(PreloadContext);
  if (!preloadContext || preloadContext.done) return null;

  preloadContext.promises.push(Promise.resolve(resolve()));
  return null;
};
