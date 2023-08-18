import React from "react"
import { Avatar, Box } from "@mui/material"

const Room = ({ data }) => {
  return (
    <div>
      <h2>{data.number}</h2>
      <p>{data.description}</p>

      <Avatar alt="Descripción de la imagen" src="https://via.placeholder.com/150" />

      <Box
        sx={{
          width: "100%",
          height: "250px",
          display: "block",
          maxWidth: "100%",
        }}
      >
        <img
          src="https://via.placeholder.com/800x300"
          alt="Descripción de la imagen"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
    </div>
  )
}

export default Room
