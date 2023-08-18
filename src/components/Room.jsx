import * as React from "react"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Collapse from "@mui/material/Collapse"
import Avatar from "@mui/material/Avatar"
import IconButton, { IconButtonProps } from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import { red } from "@mui/material/colors"
import FavoriteIcon from "@mui/icons-material/Favorite"
import ShareIcon from "@mui/icons-material/Share"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import { FavoriteBorder, Share } from "@mui/icons-material"

const BorderButton = styled(Button)(({ theme }) => ({
  borderRadius: "25px",
  alignItems: "center",
  padding: "5px 10px",
}))

export default function Room() {
  return (
    <div>
      <Card sx={{ width: "100%", boxShadow: "none", border: "none" }}>
        <CardHeader
          sx={{
            paddingLeft: "40px",
            paddingRight: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          avatar={
            <Avatar
              sx={{ bgcolor: red[500], width: 54, height: 54 }}
              aria-label="recipe"
            >
              D
            </Avatar>
          }
          action={
            <IconButton aria-label="settings" sx={{ display: "block" }}>
              <MoreVertIcon />
            </IconButton>
          }
          title={
            <Typography variant="h6" component="div">
              Línea 1
            </Typography>
          }
          subheader={
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="body1" component="div">
                Línea 2
              </Typography>
              <Typography variant="body1" component="div">
                Línea 3
              </Typography>
            </Box>
          }
        />
        <CardContent>
          <Box
            sx={{
              width: "100%",
              height: "200px",
              display: "block",
              maxWidth: "100%",
              marginBottom: "20px",
            }}
          >
            <img
              src="https://via.placeholder.com/800x300"
              alt="Descripción de la imagen"
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
          <Box>
            <BorderButton variant="outlined" sx={{ border: "1px solid" }}>
              <FavoriteBorder sx={{ marginRight: 1 }} />
              <Typography>Button 1</Typography>
            </BorderButton>
            <BorderButton variant="outlined">
              <Share sx={{ marginRight: 1 }} />
              <Typography>Button 2</Typography>
            </BorderButton>
          </Box>

          <Typography variant="body2" color="text.secondary">
            Front-end developer and Technical writer with keen attention to detail
            and a passion for delivering content as interactive as it is educational.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  )
}
