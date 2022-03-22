import React from "react";
import dish from './dish.jpg';
import left from './left.svg'
import right from './right.svg'

function Mid(){
    
    return (
        
        <div className="col-8 myDark rounded-3 m-1">
        <section className="d-flex my-3">
          <div className="m-4">New Booking</div>
          <div className="d-flex ms-4 my-4">
            <div className="">Banquet</div>
            <div className="myGray rounded-3 ms-3 px-3">Bq-01</div>
          </div>
          <div className="d-flex ms-4 my-4">
            <div className="">Venue Date</div>
            <div className="myGray rounded-3 ms-3 px-3">01-01-2022</div>
          </div>
        </section>
        <div className="border border-light rounded-1 m-1 p-3">
          <nav aria-label="breadcrumb" class="border-bottom">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#" class="text-success text-decoration-none">Customer / Venue Details</a></li>
              <li className="breadcrumb-item" aria-current="page"><a href="#" class="text-danger text-decoration-none">Menu</a></li>
              <li className="breadcrumb-item active" aria-current="page"><a href="#" class="text-secondary text-decoration-none">Amount</a></li>
              <li className="breadcrumb-item active" aria-current="page"><a href="#" className='text-secondary text-decoration-none'>Services</a></li>
            </ol>
          </nav>
          <div className="pt-3">
            <div className="d-flex justify-content-between">
              <div className="">Main Dishes</div>
              <div className="dropdown me-5">
                <button className="btn text-white btn-dark border border-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                           Break Fast
                       </button>
                       <ul className="dropdown-menu" aria-aria-labelledby='dropdownMenuButton1'>
                         <li><a href="#" className="dropdown-item text-white bg-dark">Lunch</a></li>
                         <li><a href="" className="dropdown-item text-white bg-dark">Dinner</a></li>
                         <li><a className="dropdown-item text-white bg-dark" href="#">Another</a></li>
                       </ul>
              </div>
            </div>
          </div>
          <div className="container">
                   <div className="row row-cols-4 mt-3">
                       <div className="col">
                           <img src={dish} alt="" className="mx-auto imgRound"/>
                         
                           <div className="text-center">
                           <div className="">Spicy Seasoned seafood noodles</div>
                           <div className="text-muted">$2.29</div>
                           <div className="text-muted">20 Bowls available</div>
                           </div>
                       </div>
                       <div className="col">
                           <img src={dish} alt="" className="mx-auto imgRound"/>
                           <div className="text-center">
                           <div className="">Spicy Seasoned seafood noodles</div>
                           <div className="text-muted">$2.29</div>
                           <div className="text-muted">20 Bowls available</div>
                           </div>
                       </div>
                       <div className="col">
                           <img src={dish} alt="" className="mx-auto imgRound"/>
                           <div className="text-center">
                           <div className="">Spicy Seasoned seafood noodles</div>
                           <div className="text-muted">$2.29</div>
                           <div className="text-muted">20 Bowls available</div>
                           </div>
                       </div>
                       <div className="col">
                           <img src={dish} alt="" className="mx-auto imgRound"/>
                           <div className="text-center">
                           <div className="">Spicy Seasoned seafood noodles</div>
                           <div className="text-muted">$2.29</div>
                           <div className="text-muted">20 Bowls available</div>
                           </div>
                       </div>
                       </div>
                       <div className="row row-cols-4t mt-3">
                       <div className="col">
                       <img src={dish} alt="" className="mx-auto imgRound"/>
                           <div className="text-center">
                           <div className="">Spicy Seasoned seafood noodles</div>
                           <div className="text-muted">$2.29</div>
                           <div className="text-muted">20 Bowls available</div>
                           </div>
                       </div>
                       <div className="col">
                       <img src={dish} alt="" className="mx-auto imgRound"/>
                           <div className="text-center">
                           <div className="">Spicy Seasoned seafood noodles</div>
                           <div className="text-muted">$2.29</div>
                           <div className="text-muted">20 Bowls available</div>
                           </div>
                       </div>
                       <div className="col">
                       <img src={dish} alt="" className="mx-auto imgRound"/>
                           <div className="text-center">
                           <div className="">Spicy Seasoned seafood noodles</div>
                           <div className="text-muted">$2.29</div>
                           <div className="text-muted">20 Bowls available</div>
                           </div>
                       </div>
                       <div className="col">
                       <img src={dish} alt="" className="mx-auto imgRound"/>
                           <div className="text-center">
                           <div className="">Spicy Seasoned seafood noodles</div>
                           <div className="text-muted">$2.29</div>
                           <div className="text-muted">20 Bowls available</div>
                           </div>
                       </div>
                   </div>
        </div>
      </div>
      <section className="d-flex justify-content-end m-3">
               <button className="btn btn-danger px-4 mx-2">
                   <img src={left} alt="" className="w-25"/>
                   back
               </button>
               <button className="btn btn-primary px-4 mx-2">Next
                   <img src={right} alt="" className="w-25"/>
               </button>
           </section>
           </div>
    );
}
export default Mid;