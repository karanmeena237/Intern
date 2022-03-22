import React from "react";
import dish from './dish.jpg';
import left from './left.svg'
import right from './right.svg'

function Mid(){
    
    return (
        <div className="col-8 myDark rounded-3 m-1">
          
                 <section class="d-flex my-3">
                <div class="m-4 fs-3">New Booking</div>
                <div class="d-flex ms-4 my-4">
                    <div class="">TsukasaGG <span class="text-danger">*</span> </div>
                    <div class="myGray gg d-inline-block rounded-3 ms-3 px-4 ">Bq-01</div>
                </div>
                <div class="d-flex ms-4 my-4 ">
                    <div class="">Venue Date <span class="text-danger">*</span></div>
                    <div class="myGray gg rounded-3 ms-3 px-3">01-01-2022</div>
                </div>
            </section>
            <div class=" border border-light rounded-1 m-1 p-3">
                <nav aria-label="breadcrumb" class="border-bottom">
                {/* <!-- ye alignment nhi ho raha  --> */}
                {/* Ho gaya */}
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#" class="text-success text-decoration-none">Customer / Venue Details</a></li>
                    <li class="breadcrumb-item" aria-current="page"><a href="#" class="text-danger text-decoration-none">Menu</a></li>
                    <li class="breadcrumb-item active" aria-current="page"><a href="#" class="text-secondary text-decoration-none">Amount</a></li>
                    <li class="breadcrumb-item active" aria-current="page"><a href="#" class="text-secondary text-decoration-none">Services</a></li>
                </ol>
                </nav>
                <div class="pt-3">
                    <div class="d-flex justify-content-between ">
                        <div class="">Main Dishes</div>
                        <div class="dropdown me-5  ">
                        <button class="btn text-white btn-dark border border-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Break Fast
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item text-white bg-dark" href="#">Lunch</a></li>
                            <li><a class="dropdown-item text-white bg-dark" href="#">Dinner</a></li>
                            <li><a class="dropdown-item text-white bg-dark" href="#">Another</a></li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row row-cols-4 mt-3">
                        <div class="col">
                        <img src={dish} alt="" className="mx-auto imgRound"/>
                            <div class="text-center d-flex flex-column w-75 mx-auto">
                                <div class="">Spicy Seasoned seafood noodles</div>
                                <div class="text-muted">$2.29</div>
                                <div class="text-muted">20 Bowls available</div>
                            </div>
                        </div>
                        <div class="col">
                        <img src={dish} alt="" className="mx-auto imgRound"/>
                            <div class="text-center d-flex flex-column w-75 mx-auto">
                                <div class="">Spicy Seasoned seafood noodles</div>
                                <div class="text-muted">$2.29</div>
                                <div class="text-muted">20 Bowls available</div>
                            </div>
                        </div>
                        <div class="col">
                        <img src={dish} alt="" className="mx-auto imgRound"/>
                            <div class="text-center d-flex flex-column w-75 mx-auto">
                                <div class="">Spicy Seasoned seafood noodles</div>
                                <div class="text-muted">$2.29</div>
                                <div class="text-muted">20 Bowls available</div>
                            </div>
                        </div>
                        <div class="col">
                        <img src={dish} alt="" className="mx-auto imgRound"/>
                            <div class="text-center d-flex flex-column w-75 mx-auto">
                                <div class="">Spicy Seasoned seafood noodles</div>
                                <div class="text-muted">$2.29</div>
                                <div class="text-muted">20 Bowls available</div>
                            </div>
                        </div>
                    </div>
                    <div class="row row-cols-4 mt-3">
                        <div class="col">
                        <img src={dish} alt="" className="mx-auto imgRound"/>
                            <div class="text-center d-flex flex-column w-75 mx-auto">
                                <div class="">Spicy Seasoned seafood noodles</div>
                                <div class="text-muted">$2.29</div>
                                <div class="text-muted">20 Bowls available</div>
                            </div>
                        </div>
                        <div class="col">
                        <img src={dish} alt="" className="mx-auto imgRound"/>
                            <div class="text-center d-flex flex-column w-75 mx-auto">
                                <div class="">Spicy Seasoned seafood noodles</div>
                                <div class="text-muted">$2.29</div>
                                <div class="text-muted">20 Bowls available</div>
                            </div>
                        </div>
                        <div class="col">
                        <img src={dish} alt="" className="mx-auto imgRound"/>
                            <div class="text-center d-flex flex-column w-75 mx-auto">
                                <div class="">Spicy Seasoned seafood noodles</div>
                                <div class="text-muted">$2.29</div>
                                <div class="text-muted">20 Bowls available</div>
                            </div>
                        </div>
                        <div class="col">
                        <img src={dish} alt="" className="mx-auto imgRound"/>
                            <div class="text-center d-flex flex-column w-75 mx-auto">
                                <div class="">Spicy Seasoned seafood noodles</div>
                                <div class="text-muted">$2.29</div>
                                <div class="text-muted">20 Bowls available</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section class="d-flex justify-content-end m-3">
                <button class="btn btn-danger ps-5 mx-2">
                <img src={left} alt="" className="w-25 ms-1 mx-3"/>
                    Back
                </button>
                <button class="btn btn-primary ps-5 mx-2">Next
                <img src={right} alt="" className="w-25 mb-1 ms-3"/>
                </button>
            </section>
</div>
    );
}
export default Mid;