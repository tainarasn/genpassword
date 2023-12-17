import React from "react"
import { SnackbarProvider } from "burgos-snackbar"
import {  ConfirmDialogProvider } from "burgos-confirm"
import { MantineProvider } from "@mantine/core"
import { useMantineTheme } from "./hooks/useMantineTheme"
import "@mantine/core/styles.css"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "@mui/material"
import { useMuiTheme } from "./hooks/useMuiTheme"

interface ProvidersProps {
    children: React.ReactNode
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
    const mantine_theme = useMantineTheme()
    const mui_theme = useMuiTheme()

    return (
        <BrowserRouter>
            <ThemeProvider theme={mui_theme}>
                <SnackbarProvider>
                    <ConfirmDialogProvider>
                        <MantineProvider theme={mantine_theme} defaultColorScheme="dark">
                            {children}
                        </MantineProvider>
                    </ConfirmDialogProvider>
                </SnackbarProvider>
            </ThemeProvider>
        </BrowserRouter>
    )
}
