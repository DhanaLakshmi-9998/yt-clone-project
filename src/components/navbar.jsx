import React from 'react'
import { Stack } from '@mui/material'
import {logo} from '../utils/constants'
import { Link } from 'react-router-dom'
import SearchBar from './searchbar'

const Navbar = () => {
  return (
    <div style={{position:"sticky",background:"#000", top:0}}>
      <Stack direction="row" alignItems='center' p={3} sx={{position:"sticky", background:"#000", top:0, justifyContent:'space-between'}}>
      {/* yt logo */}
      <Link to="/" style={{display:'flex', alignItems:'center'}}>
        <img src={logo} alt='logo' height={45}/>
      </Link>
      {/* search component */}
      <SearchBar/>
    </Stack>
    </div>
  )
}

export default Navbar
