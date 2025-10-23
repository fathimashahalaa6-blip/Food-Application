import { createContext } from "react";

// Context object is kept in its own file to satisfy react-refresh lint rule
// which requires files exporting components to not export non-component values.
export const StoreContext = createContext(null);

export default StoreContext;
