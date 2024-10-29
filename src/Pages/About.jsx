import { Grid, Typography } from '@mui/material'
import React from 'react';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

function About() {
  return (
    <div className='w-full h-auto bg-black text-white p-12 pt-[100px]'>
        <Grid container spacing={4}>
           <Grid item xs={12} md={4} lg={4}>
             <Typography sx={{fontSize:"20px"}}>Address</Typography>
             <div className='mt-5 ml-16'>
              <Typography>Ms.Kalavathi Muthuraman</Typography>
              <Typography>7/14 North Street,</Typography>
              <Typography>Thiruvenkadapuram,</Typography>
              <Typography>Theripanani-600702</Typography>
             </div>
           </Grid>
           <Grid item xs={12} md={4} lg={4}>
             <Typography sx={{fontSize:"20px"}}>Contact</Typography>
             <div className='mt-5 ml-5'>
              <div className='flex flex-row'>
                <PhoneAndroidIcon/>
                <Typography sx={{marginLeft:"10px"}}>+917904055589</Typography>
              </div>
              <div className='flex flex-row mt-5'>
                <MailIcon/>
                <Typography sx={{marginLeft:"10px"}}>java7401546493@gmail.com</Typography>
              </div>
             </div>
           </Grid>
           <Grid item xs={12} md={4} lg={4}>
             <Typography sx={{fontSize:"20px"}}>Follow On Us</Typography>
             <div className='p-5 flex flex-between'>
             <FacebookIcon onClick={() => {
              window.open('https://www.facebook.com/profile.php?id=100038116292187/', '_blank');
            }}/>
             <InstagramIcon/>
             <LinkedInIcon onClick={() => {
              window.open('https://www.linkedin.com/in/vijayaraj-m-037706292/', '_blank');
            }}/>
             <TwitterIcon/>
             </div>
           </Grid>
        </Grid>
    </div>
  )
}

export default About