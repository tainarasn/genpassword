import Box from "@mui/material/Box"
import React, { useState } from "react"
import { SxProps, Checkbox, FormGroup, FormControlLabel, Button } from "@mui/material"
import { IconCopy, IconArrowRight, IconRefresh } from "@tabler/icons-react"
import { colors } from "../styles/colors"
import { useClipboard } from "@mantine/hooks"
import { Slider, Tooltip } from "@mantine/core"
import { usePassword } from "../hooks/usePassword"
import { useStrong } from "../hooks/useStrong"
import { Logo } from "../components/Logo"
import { Footer } from "../components/Footer"

interface HomeProps {}
const box_style: SxProps = {
    borderRadius: "0.3vw",
    padding: "1vw",
    bgcolor: "#2b2b2c",
    width: "60%",
}

const label_check: SxProps = {
    "& .MuiTypography-root": {
        fontFamily: "space",
        fontSize: "1.0vw",
        margin: 0,
    },
}
export const Home: React.FC<HomeProps> = ({}) => {
    const clipboard = useClipboard()

    const [password, setPassword] = useState("")
    const [value, setValue] = useState(6)

    const [upper, setUpper] = useState(false)
    const [lower, setLower] = useState(false)
    const [number, setNumber] = useState(false)
    const [symbol, setSymbol] = useState(false)

    const handleChangeU = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUpper(event.target.checked)
    }
    const handleChangeL = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLower(event.target.checked)
    }
    const handleChangeN = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNumber(event.target.checked)
    }
    const handleChangeS = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSymbol(event.target.checked)
    }

    const handleGenerate = () => {
        const newPassword = usePassword(value, upper, lower, number, symbol)
        setPassword(newPassword)
    }

    const { getStrengthLabel } = useStrong(password)
    const strongify = getStrengthLabel()
    return (
        <Box sx={{ height: "100%" }}>
            <Box sx={{ flexDirection: "row", height: "95%", justifyContent: "space-around" }}>
                <Box sx={{ ...box_style, p: "10vw 5vw 10vw 8vw ", bgcolor: "transparent" }}>
                    <Logo />
                    <p style={{ fontFamily: "space", fontSize: "0.9vw" }}>
                        Este projeto foi desenvolvido como um desafio do Frontend Mentor, sendo uma ferramenta geradora de
                        senhas em vários níveis, desde senhas fracas até as mais fortes. Para a sua construção, foram
                        utilizados os frameworks React JS e TypeScript, juntamente com as bibliotecas Mantine UI e
                        Material-UI. Este foi um projeto bastante interessante de desenvolver, pois me permitiu aplicar tudo
                        o que venho aprendendo nos últimos meses. Foi feito com muito carinho e dedicação. Espero
                        sinceramente que seja útil para você.
                    </p>
                </Box>
                <Box
                    sx={{
                        height: "100%",
                        width: "70%",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "1vw",
                    }}
                >
                    <p
                        style={{
                            fontSize: "1.5vw",
                            fontFamily: "machine",
                            letterSpacing: "0.15vw",
                        }}
                    >
                        <span style={{ color: colors.primary, fontFamily: "machine" }}>G</span>erador de{" "}
                        <span style={{ color: colors.primary, fontFamily: "machine" }}>S</span>enhas{" "}
                    </p>
                    <Box
                        sx={{
                            mt: "1vw",
                            height: "10%",
                            ...box_style,
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexDirection: "row",
                            border: "1px solid #d54f07",
                        }}
                    >
                        <h2 style={{ fontFamily: "space" }}>{password !== " " ? password : ""}</h2>
                        <Box sx={{ flexDirection: "row", gap: "0.5vw" }}>
                            {password !== "" && (
                                <Tooltip label={"New"} style={{ fontFamily: "space" }}>
                                    <IconRefresh
                                        style={{ cursor: "pointer" }}
                                        color={colors.primary}
                                        onClick={handleGenerate}
                                    />
                                </Tooltip>
                            )}
                            <Tooltip label={clipboard.copied ? "Copied" : "Copy"} style={{ fontFamily: "space" }}>
                                <IconCopy
                                    style={{ cursor: "pointer" }}
                                    color={clipboard.copied ? "white" : colors.primary}
                                    onClick={() => clipboard.copy(password)}
                                />
                            </Tooltip>
                        </Box>
                    </Box>
                    <Box sx={{ height: "fit-content", ...box_style, gap: "1vw" }}>
                        <Box sx={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <h3 style={{ fontFamily: "space" }}>Tamanho da senha</h3>
                            <h2
                                style={{ fontFamily: "space", fontSize: "2vw", color: colors.primary, marginRight: "0.5vw" }}
                            >
                                {value}
                            </h2>
                        </Box>
                        <Slider
                            color="#d54f07"
                            radius="sm"
                            min={6}
                            max={20}
                            value={value}
                            thumbSize={20}
                            onChange={setValue}
                            marks={[
                                { value: 20, label: "" },
                                { value: 50, label: "" },
                                { value: 80, label: "" },
                            ]}
                        />
                        <Box sx={{ flexDirection: "column", gap: "0vw", fontFamily: "space" }}>
                            <FormGroup sx={{ gap: "0vw" }}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            size="small"
                                            defaultChecked
                                            checked={upper}
                                            onChange={handleChangeU}
                                            inputProps={{ "aria-label": "controlled" }}
                                        />
                                    }
                                    label="Maiúsculas"
                                    sx={label_check}
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            size="small"
                                            defaultChecked
                                            checked={lower}
                                            onChange={handleChangeL}
                                            inputProps={{ "aria-label": "controlled" }}
                                        />
                                    }
                                    label="Minúsculas"
                                    sx={label_check}
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            size="small"
                                            checked={number}
                                            onChange={handleChangeN}
                                            inputProps={{ "aria-label": "controlled" }}
                                        />
                                    }
                                    label="Números"
                                    sx={label_check}
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            size="small"
                                            checked={symbol}
                                            onChange={handleChangeS}
                                            inputProps={{ "aria-label": "controlled" }}
                                        />
                                    }
                                    label="Símbolos"
                                    sx={label_check}
                                />
                            </FormGroup>
                        </Box>
                        <Box
                            sx={{
                                bgcolor: "#1b1b1b",
                                width: "100%",
                                height: "15%",
                                borderRadius: "0.3vw",
                                p: "1vw",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "centerl",
                            }}
                        >
                            <p style={{ fontFamily: "space", width: "48%", fontSize: "1vw" }}>Segurança </p>
                            <Box
                                sx={{
                                    flexDirection: "row",
                                    width: "65%",
                                    alignItems: "center",
                                    justifyContent: "flex-end",
                                    gap: "0.3vw",
                                }}
                            >
                                <h4
                                    style={{
                                        fontFamily: "space",
                                        textTransform: "uppercase",
                                        width: "60%",
                                        textAlign: "end",
                                    }}
                                >
                                    {getStrengthLabel()}
                                </h4>
                                <Box
                                    sx={{
                                        flexDirection: "row",
                                        width: "3%",
                                        height: "100%",
                                        bgcolor:
                                            strongify === "Média" || strongify === "Forte" || strongify === "Muito Forte"
                                                ? "red"
                                                : "red",
                                        borderRadius: "0.2vw",
                                    }}
                                />
                                <Box
                                    sx={{
                                        flexDirection: "row",
                                        width: "3%",
                                        height: "100%",
                                        bgcolor:
                                            strongify === "Média" || strongify === "Forte" || strongify === "Muito Forte"
                                                ? "red"
                                                : "#2b2b2c",
                                        borderRadius: "0.2vw",
                                    }}
                                />
                                <Box
                                    sx={{
                                        flexDirection: "row",
                                        width: "3%",
                                        height: "100%",
                                        bgcolor: strongify === "Forte" || strongify === "Muito Forte" ? "red" : "#2b2b2c",
                                        borderRadius: "0.2vw",
                                    }}
                                />
                                <Box
                                    sx={{
                                        flexDirection: "row",
                                        width: "3%",
                                        height: "100%",
                                        bgcolor: strongify === "Muito Forte" ? "red" : "#2b2b2c",
                                        borderRadius: "0.2vw",
                                    }}
                                />
                            </Box>
                        </Box>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ width: "100%", fontFamily: "space", gap: "0.8vw" }}
                            onClick={handleGenerate}
                        >
                            Generate <IconArrowRight />
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Footer />
        </Box>
    )
}
