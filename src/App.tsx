import "./App.css"
import { Snackbar } from "@mui/material"
import { Routes } from "./Routes"
import { Providers } from "./Providers"
import "@mantine/core/styles.css"
import { ConfirmDialog } from "burgos-confirm"
function App() {
    return (
        <Providers>
            <Routes />
            <Snackbar />
            <ConfirmDialog />
        </Providers>
    )
}

export default App
