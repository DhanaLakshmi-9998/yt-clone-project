
import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Navbar, Feed, VideoDetails, ChannelDetails, SearchFeed} from '../src/components/index'

export function App() {
  return (
    <BrowserRouter>
    <Box sx={{backgroundColor:"#000"}}>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Feed/>}></Route>
          <Route path="/video/:id" element={<VideoDetails/>}></Route>
          <Route path="/channel/:id" element={<ChannelDetails/>}></Route>
          <Route path="/search/:searchterm" element={<SearchFeed/>}></Route>

        </Routes>
        </Box>
    </BrowserRouter>
  );
}

export default App;
