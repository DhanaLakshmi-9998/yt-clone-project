import React, { useEffect, useState } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import {SideBar,Videos} from '../components/index'
import { fetchFromAPI } from '../utils/fetchfromapi'


const Feed = () => { 
  const [selectedCategory, setSelectedCategory]=useState('New');
  const [videos, setVideos]=useState([])
  useEffect(()=>{
    // asynchronous function
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then(data=>setVideos(data.items))
  },[selectedCategory])
  return (
    <Stack sx={{flexDirection:{sx:'column',md:'row'}}}>
      
      <Box sx={{height:{sx:'auto',md:'92vh'},borderRight:'1px solid #3d3d3d', px:{sx:0,md:2} }}>
        <SideBar
        selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/> 
        <Typography className='copyright' variant='body2' sx={{mt:1.5,color:'#fff'}}>
          Copyright 2024 yt-clone
        </Typography>
      </Box>

      {/* category desciption */}
      <Box p={2} sx={{overflowY:'auto', height:'90vh', flex:2}}>
        <Typography variant='h4' fontWeight="bold" mb={2} sx={{color:'#fff'}}>
          {selectedCategory} <span style={{color:'#F31503'}}>videos</span>
        </Typography>
         {/* videos */}
      <Videos videos={videos}/>
      </Box>

     
    </Stack>
  )
}

export default Feed
