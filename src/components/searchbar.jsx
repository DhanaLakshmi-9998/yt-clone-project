import React,{useState} from 'react'
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
const SearchBar = () => {
    const [searchTerm, setSearchTerm]=useState('');
    const navigate=useNavigate();
    function handleSubmit(e){
    
        e.preventDefault()
        if (searchTerm) {
          navigate((`/search/${searchTerm}`))
          setSearchTerm('')
     
       }
    }

  return (
    
    // simple div with white background
   <Paper 
   component="form"
   onSubmit={handleSubmit}
   sx={{border:'1px solid #e3e3e3',
    borderRadius:20,
    pl:2,
    boxShadow:'none',
    mr:{sm:5,md:15,lg:20}}}> 
    <input className='search-bar' placeholder='Search...' value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}}/>
    <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
        <Search />
      </IconButton>
  
   </Paper>
  )
}

export default SearchBar
