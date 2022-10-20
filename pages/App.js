import { initialState, themeReducer } from "./utils";
import { ThemeContext } from "./ThemeContext";
import { useReducer } from "react";
import ButtonTheme from "../components/ButtonTheme.component";

export default function App() {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      <ButtonTheme>Change Theme</ButtonTheme>
    </ThemeContext.Provider>
  );
}
