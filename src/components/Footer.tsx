import { Box } from "@mui/material"
import React from "react"

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "5%",
                fontFamily: "space",
                fontSize: "0.7vw",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {" "}
            Challenge by Frontend Mentor. Coded by Tainara Novaes. 2023.
        </Box>
    )
}
