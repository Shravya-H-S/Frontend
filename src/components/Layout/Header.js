import React from 'react'
import { Space } from "antd";
import {Input} from 'antd'
import './Header.css';
import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';



const Header = () => {
  return (
    <Box>
      <AppBar component={'nav'} sx={{bgcolor:'white'}}>
        <Toolbar>
        <Typography >
          <div className='upp'>
            <form>
            <div className='field'>
                    <label>Search For Companies</label>
                    <Input placeholder='Ex.Effinity Technologies' maxLength={30}></Input>
                </div>
            </form>
          </div><br></br>
          <Space>
            <HomeIcon/>
          </Space>
          
        </Typography>
        <Box>
      
        </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header