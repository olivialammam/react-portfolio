import React from 'react';
import 'owl.carousel';
import Navigation from './Navigation';

function header()
{ return (
    <header 
                className='p-5 text-center bg-image'
        style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('https://i.im.ge/2022/09/15/1liXVc.pexels-vlad-bagacian-3987066-14.jpg')", height: '800px', backgroundSize: 'cover'  }}
        // className='mask'
        // style = {{
        //     //make overlay
           
        //    //change this color to the other one which you want
        //     backgroundColor: 'rgba(56, 54, 54, 0.5)',
            
        // }}
 >
        <Navigation></Navigation>

        {/* <div class="overlay"></div> */}
    
    {/* <div className='mask' style={{ backgroundColor: 'rgba(56, 54, 54, 0.5)', height: '600px'}}> */}
          <div className='d-flex justify-content-center align-items-center p-5'>

                <div class="text-center my-5">
                    <h1 class="display-4 font-weight-bold text-white">Olivia Lammam</h1>
                    <p class="lead text-white font-weight-bold font-italic mb-0 mb-4 ">Full Stack Web Developper.</p>
                    <div class="d-grid gap-3 d-sm-flex justify-content-sm-center">
                        <a class="btn btn-primary btn-lg px-4 me-sm-3" href="#contact">Contact</a>
                        <a class="btn btn-outline-light btn-lg px-4" href="#about">Learn More</a>
                    </div>
                
            </div>
        </div>
    
    {/* </div> */}
</header>
)}

export default header;