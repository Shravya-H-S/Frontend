

import React from 'react'
import {Button, Input, Space} from 'antd'
import {input} from 'antd'
import {Card} from 'antd'
import Layout from '../components/Layout/Layout'
import { Typography } from '@mui/material'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SettingsIcon from '@mui/icons-material/Settings';
const Home = () => {
  return (
    <Layout>
       < div className='container' >
       

        
        <Card style={{width:320}}>
        <form>
            
            <h1>Create company</h1><br></br>
            <div className='But2'>
               <Space direction='Vertical' size={12}>
                <Space direction='horizontal' size={10}>
                <Button type='link'><u>Basic Details</u></Button>
                <Button type='text'>Registration Detials</Button>
                </Space>
                </Space>
                </div><br></br>
            <div className='ui divider'></div>
            <div className='ui form'>
            <Space direction='vertical' size={12}>
                <div className='field'>
                    <label>Company Name</label>
                    <Input placeholder='Ex.Effinity Technologies' maxLength={30}></Input>
                </div>
                <div className='field'>
                    <label>Type of Company</label>
                    <Input placeholder='Ex.Private Limited' maxLength={30}></Input>
                </div>
                <div className='field'>
                    <label>Date of Incorporation</label>
                    <Input type="date"  placeholder="Select date"></Input>
                </div>
                <div className='field'>
                    <label>Email</label>
                    <Input placeholder='Ex.Effinity@hotmail.com' maxLength={30}></Input>
                </div>
                <div className='field'>
                   
                    <label>Website</label>
                    <Input type="url"  placeholder="Ex.Effinity Technologies"></Input>
                </div><br></br>
                </Space>
               <div className='But'>
               <Space direction='Vertical' size={12}>
                <Space direction='horizontal' size={12}>
                <Button>Back</Button>
                <Button type='primary'>Next</Button>
                </Space>
                </Space>
                
               </div>
            </div>
           
        </form>
        </Card>
        
       </div>
       
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <Typography>
        <button className='profile'>Create Company</button>
        <PersonOutlineIcon/>
       </Typography>
       <Typography my={4} >
        <SettingsIcon/>
       </Typography>
        </Layout>
  )
}

export default Home