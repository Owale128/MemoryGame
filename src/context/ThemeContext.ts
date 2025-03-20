import { createContext } from "react";

export interface ITheme {
    name: string;
    color: string;
    border: string;
    background: string;
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

export const ThemeContext = createContext<ITheme>(themes.light)