import React from "react"
import { connect } from "react-redux"
import { selectRoom } from "../actions"
import { Tab, Tabs, Box } from "@mui/material"

import Room from "./Room"

const roomData = [
  {
    id: 1,
    roomId: "ceae0d77-2fd6-dbe3-0f33-61c355c106ff",
  },
  {
    id: 2,
    roomId: "4c0ad727-1652-3b6e-4adb-61c21a17a4b1",
  },
  {
    id: 3,
    roomId: "ceae0d77-2fd6-dbe3-0f33-61c355c106ff",
  },
]

const Rooms = ({ selectRoom }) => {
  const [selectedTab, setSelectedTab] = React.useState(0)

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue)
    selectRoom()
  }

  return (
    <div>
      <Tabs value={selectedTab} onChange={handleTabChange} centered>
        {roomData.map((room) => (
          <Tab key={room.id} label={`Room ${room.id}`} />
        ))}
      </Tabs>
      <Box>
        <Room data={roomData[selectedTab]} />
      </Box>
    </div>
  )
}

const mapStateToProps = (state) => ({
  room: state.room,
})

const mapDispatchToProps = {
  selectRoom,
}

export default connect(mapStateToProps, mapDispatchToProps)(Rooms)
