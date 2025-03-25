import { createContext } from "react";
import { ITheme } from "../model/ITheme";

export interface IThemeContext {
    theme: ITheme
    toggleTheme: () => void;
}

interface IThemes {
    dark: ITheme;
    light: ITheme;
}

export const themes: IThemes = {
    dark: {
        name: 'Dark',
        border: 'white',
        color: 'white',
        background: 'black'
    },
    light: {
        name: 'Light',
        border: 'black',
        color: 'black',
        background: 'white'
    }
}

export const ThemeContext = createContext<IThemeContext>({
    theme: themes.light,
    toggleTheme: () => void {}
})