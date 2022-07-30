import React from 'react';
import 'owl.carousel';
import $ from 'jquery';
import Navigation from './Navigation';

function header()
{ return (
<header>
    <div>
        <div className="item">
            <Navigation></Navigation>
            <img src="https://cdn.pixabay.com/photo/2015/05/31/10/51/technology-791029_960_720.jpg" alt=""/>
            <div className="cover">
                <div className="container">
                    <div className="header-content">
                        <div className="line"></div>
                        <h2>Reinvent Business Experience with</h2>
                        <h1>Our Global and Integrated Solutions</h1>
                        <h4>We help entrepreneurs, start-ups and enterprises shape their ideas into business</h4>
                    </div>
                </div>
             </div>
        </div>                    
 </div>
</header>
)}

export default header;