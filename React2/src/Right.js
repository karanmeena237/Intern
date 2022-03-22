import React from "react";
import del from "./del.png"
function Right(){
    return(
        <div className="col-4 m-1">
                 <div className="myDark p-4 ps-3 rounded-top">Details</div>
            <div className="myDark d-flex justify-content-between py-2 px-3 my-1">
                <div className="">S. No.</div>
                <div className="">Dish Name</div>
                <div className="">Delete</div>
            </div>
            <div className="myDark pt-1 h-100">
                <div className="myGray d-flex justify-content-between align-items-center mx-2 mb-1 px-2 ">
                    <div className="">#1.</div>
                    <div className="">Paneer Masala</div>
                    <div className="">
                        <button className="btn btn-outline-danger">
                            <img  src={del} alt="delete" className="imgSize"/>
                        </button>
                    </div>
                </div>
                <div className="myDark d-flex justify-content-between align-items-center mx-2 my-1 px-2">
                    <div className="">#1.</div>
                    <div className="">Paneer Masala</div>
                    <div className="">
                        <button className="btn btn-outline-danger">
                            <img  src={del} alt="delete" className="imgSize"/>
                        </button>
                    </div>
                </div>
                <div className="myGray d-flex justify-content-between align-items-center mx-2 my-1 px-2 ">
                    <div className="">#1.</div>
                    <div className="">Paneer Masala</div>
                    <div className="">
                        <button className="btn btn-outline-danger">
                            <img  src={del} alt="delete" className="imgSize"/>
                        </button>
                    </div>
                </div>
                <div className="myDark d-flex justify-content-between align-items-center mx-2 my-1 px-2">
                    <div className="">#1.</div>
                    <div className="">Paneer Masala</div>
                    <div className="">
                        <button className="btn btn-outline-danger">
                            <img  src={del} alt="delete" className="imgSize"/>
                        </button>
                    </div>
                </div>
                <div className="myGray d-flex justify-content-between align-items-center mx-2 my-1 px-2 ">
                    <div className="">#1.</div>
                    <div className="">Paneer Masala</div>
                    <div className="">
                        <button className="btn btn-outline-danger">
                            <img src={del} alt="delete" className="imgSize"/>
                        </button>
                    </div>
                </div>
                <div className="myDark d-flex justify-content-between align-items-center mx-2 my-1 px-2">
                    <div className="">#1.</div>
                    <div className="">Paneer Masala</div>
                    <div className="">
                        <button className="btn btn-outline-danger">
                            <img src={del} alt="delete" className="imgSize"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        );
    }
    export default Right;