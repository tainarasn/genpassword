import { createTheme } from "@mui/material"
import { colors } from "../styles/colors"

export const useMuiTheme = () => {
    const THEME = createTheme({
        typography: {
            fontFamily: ["at", "hammk", "machine", "space", "Teko"].join(","),
        },
        palette: {
            primary: {
                main: colors.primary,
            },
            secondary: {
                main: colors.secondary,
            },

            background: {
                default: colors.background.default,
                paper: colors.background.paper,
            },

            text: {
                primary: colors.primary,
                secondary: colors.terciary,
            },

            success: {
                main: colors.success,
            },

            warning: {
                main: colors.warning,
            },
        },
    })

    return THEME
}
