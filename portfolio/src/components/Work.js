import React from 'react';

function About()
{return (
    <section 
    class="py-5 border-bottom bg-light" id="features">
    <div class="container px-5 my-5">
        <div class="row gx-5">
            <div class="col-lg-4 mb-5 mb-lg-0">
                <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-collection"></i></div>
                <h2 class="h4 fw-bolder">Vehicle Maintnance Tracker</h2>
                <p>Users can track time and mileage on their vehicle and then be given a time frame for their next maintenance check. Display's a responsive front-end comprised of SASS and Handlebars.js, and a back end built with Node and MySQL2.</p>
                <a class="text-decoration-none" href="https://github.com/Rober2092/Vehicle-Maintenance-Tracker">
                View Repository
                    <i class="bi bi-arrow-right"></i>
                </a>
            </div>
            <div class="col-lg-4 mb-5 mb-lg-0">
                <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-building"></i></div>
                <h2 class="h4 fw-bolder">Zankooo</h2>
                <p>Zankooo is a full-stack e-commerce website for a startup fashion retailer, using the MERN stack to interact with company and customer data. The application allows users to browse and save items to their personal shopping cart, and purchase items online using an integrated payment platform to complete their orders.</p>
                <a class="text-decoration-none" href="https://github.com/Rober2092/zankooo">
                View Repository
                    <i class="bi bi-arrow-right"></i>
                </a>
            </div>
            <div class="col-lg-4">
                <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-toggles2"></i></div>
                <h2 class="h4 fw-bolder">Employee Tracker</h2>
                <p>Employee tracker is a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.</p>
                <a class="text-decoration-none" href="https://github.com/olivialammam/employee-tracker">
                    View Repository
                    <i class="bi bi-arrow-right"></i>
                </a>
            </div>
            <div class="col-lg-4 mb-5 mb-lg-0">
                <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-collection"></i></div>
                <h2 class="h4 fw-bolder">Salon Vibes</h2>
                <p>Salon Vibes e-commerce store for a beauty salon that sells various products. Created using shopify.</p>
                <a class="text-decoration-none" href="https://shop.salonvibes.com/">
                View Website
                    <i class="bi bi-arrow-right"></i>
                </a>
            </div>
            <div class="col-lg-4 mb-5 mb-lg-0">
                <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-building"></i></div>
                <h2 class="h4 fw-bolder">Dressier Fashion</h2>
                <p>Dressier Fashion is an e-commerce women's clothing shop. Created using shopify.</p>
                <a class="text-decoration-none" href="https://dressierfashion.com/">
                View Website
                    <i class="bi bi-arrow-right"></i>
                </a>
            </div>
        </div>
    </div>
</section>
)}

export default About;