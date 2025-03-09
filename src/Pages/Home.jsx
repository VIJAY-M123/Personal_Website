import { Button, Card, Grid, Typography } from '@mui/material'
import React from 'react'
import Technology from './Technology';
import About from './About';
import Profile from "../Image/developer-profile.jpg";
import backgroundImage from '../Image/backgroundImage.jpg';
import Service from './Service';
import { motion } from 'framer-motion';
import AnimatedText from "../Components/AnimatedText";
import Experience from '../Components/Experience';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Resume from "../Assets/PDF/Vijayaraj_Resume.pdf";
import Review from './Review';



function Home() {
 
  return (
    <>
    <div className='h-auto w-full bg-zinc-200  pb-11'>
      <div className='pt-24 w-full h-[350px]' style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}>
      </div>
      <div className='pl-10 pr-10 lg:pl-24 lg:pr-24'>
      <Grid container spacing={4}>
      <Grid item xs={12} lg={4} xl={3}>
        <Card className='mt-[-74px] lg:mt-[-44px] flex items-center flex-col p-8' component={motion.div}
                  initial={{ x: -500 }}
                  animate={{ x:0 }}
                  transition={{ duration: 0.9, bounceDamping: 0 }}>
         
          <div className='h-40 w-40 mt-[-120px] absolute'>
           <img src={Profile} alt='profile.png' className='rounded-full'/>
          </div>
          <Typography sx={{marginTop:"60px",fontWeight:"bold",fontSize:"30px"}}>Vijayaraj M</Typography>
          <Typography sx={{marginTop:"15px",fontWeight:"bold",fontSize:"18px"}}>Aggrandize venture Pvt Ltd</Typography>
          <Typography sx={{marginTop:"15px",fontWeight:"bold",fontSize:"15px"}}>Senior Software Developer</Typography>
          <Typography sx={{marginTop:"15px",fontWeight:"bold",fontSize:"15px"}}>4+ Years Experience</Typography>
        </Card>
       </Grid>
       <Grid item xs={12} lg={8} xl={9} component={motion.div}
                  initial={{ x: 500 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.9, bounceDamping: 0 }}> 
       {/* <Card className='h-[300px] w-full'  style={{
                backgroundImage: `url(${bg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}>

       </Card> */}
       <div className='flex flex-col items-start justify-center'>
       <AnimatedText text="Turning Vision Into Reality With Code And Design" className="text-4xl md:text-6xl"/>
        <p className='text-[20px] font-normal'>I'm a software engineer with expertise designing 
          Web Applications and Mobile Apps using JavaScript/ReactJs/React Native/NodeJs, 
          as well as several other great libraries and frameworks.</p>
       </div>
       <div className='w-full flex justify-center items-center gap-10 mt-10'>
        <Button sx={{backgroundColor:"#000000",
            ":hover": {
                    backgroundColor: "#E0E0E0",
                    color: "#000000" // Changing text color on hover if needed
                }}} className="rounded-md  text-white hover:text-black"             
          variant="contained" endIcon={<OpenInNewIcon/>} href={Resume} download={true}>Resume</Button>
          <Button 
         
          className="rounded-md  text-white hover:text-blacK"             
          variant="outlined" endIcon={<OpenInNewIcon/>}>Contact</Button>
       </div>
       </Grid>
      
      </Grid>
      </div>
    </div>
    <Service/>
    <Experience/>
    <Technology/>
    <Review/>
    <About/>
    </>
   
  )
}

export default Home