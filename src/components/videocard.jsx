import React from 'react'
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import {demoThumbnailUrl, demoChannelUrl,demoVideoUrl,demoChannelTitle,demoVideoTitle} from '../utils/constants'
import { Link } from 'react-router-dom';

const VideoCard = ({video:{id:{videoId},snippet}}) => {
    // console.log(videoId, snippet);
  return (
   <Card className='videos' sx={{width:{md:'300px',xs:"100%",sm:'230px'}, boxShadow:'none',borderRadius:0}}>
    {/*image*/}
    <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
        <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title} sx={{width:350, height:180}}/>
    </Link>
    <CardContent sx={{backgroundColor:"#1e1e1e", height:'106px'}}>

    {/* video title by videoId */}
    <Link to={(videoId )?`/video/${videoId}`:demoVideoUrl}>
        <Typography variant='subtitle1' fontWeight="bold" color="#fff">
            {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60) }
        </Typography>
    </Link>

    {/* channel title by channelId */}
    <Link to={snippet?.channelId ?`/channel/${snippet?.channelId}`:demoChannelUrl}>
        <Typography variant='subtitle2' fontWeight="bold" color="gray">
            {snippet?.title.slice(0,60) || demoChannelTitle.slice(0,60) }
            <CheckCircle sx={{fontSize:'12', color:'gray', ml:'15px'}}/>
        </Typography>
    </Link>
    </CardContent>
   </Card>
  )
}

export default VideoCard;
