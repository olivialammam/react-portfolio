import React from 'react';
import 'owl.carousel';
import Navigation from './Navigation';

function header()
{ return (
    <header 
                className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://i.im.ge/2022/09/15/1liXVc.pexels-vlad-bagacian-3987066-14.jpg')", height: '800px', backgroundSize: 'cover'  }}
      >
        <Navigation></Navigation>
    <div class="container px-5">
        <div class="row gx-5 justify-content-center">
            <div class="col-lg-6">
                <div class="text-center my-5">
                    <h1 class="display-5 fw-bolder text-white mb-2">Olivia Lammam</h1>
                    <p class="lead text-white-50 mb-4">I'm a Full Stack Web Developer from Los Angeles.</p>
                    <div class="d-grid gap-3 d-sm-flex justify-content-sm-center">
                        <a class="btn btn-primary btn-lg px-4 me-sm-3" href="#features">Contact</a>
                        <a class="btn btn-outline-light btn-lg px-4" href="#!">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
)}

export default header;