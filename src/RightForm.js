import React from 'react';
import {useState} from 'react';
class RightForm extends React.Component {
  state={
    CustomerName:"",
    Adress:"",
  };

  

  add=(e)=>{
    e.preventDefault();
    if(this.state.name ==="" && this.state.Adress === ""){
      alert("All fields are mandatory");
      return
    }
    // using from parent addcontacthandler
    this.props.addContactHandler(this.state);
    // after adding the contact info refereshing the form via
    this.setState({CustomerName:"",email:""});
    console.log(this.state)
  }
  // We use props from parent to child
  render(){
  return (
    <div className="right">
      <div className="banquet">
      <h3 className='FirstHead'>
        New Booking
      </h3>
        <label htmlFor="banquet" className="label" aria-required> <span className='topbar' >Banquet</span> 
        <select name="code" id="code" required className='dropdown' >
                    <option >Bq-01</option>
                    <option>+1</option>
                    <option >+21</option>
                </select>
                </label>

                <label htmlFor="date"><span className='topbar' >Venue date </span></label>    
                <input type="date" className='date' name="date" id="date" />    
                <button className="ui button green">Search</button>
      </div>
      <div/>
      
      <div className="bottomform ">
      
        <label htmlFor="SelectCustomer" className="label"> <span className='topbar2' >Select Customer</span> 
        <select name="code" id="code" className='dropdown2 grey' >
                    <option >Type Customer Name Or Number</option>
                    <option>+1</option>
                    <option >+21</option>
                </select>
                </label>
    <h4><span>Or</span></h4>
    <form action="" onSubmit={this.add} >
                      <label htmlFor="Customer Name" className='label'>
                  <span className="topbar2">Customer Name</span>
                  <input type="text" value={this.state.name} onChange={(e)=> this.setState({CustomerName: e.target.value})}  name="Customer Name" placeholder='Customer Name' className="CustomerName" />
                </label>

                <label htmlFor="Contact Number" className="label" name="Customer Number">
                <span className="topbar2">Customer Number</span>
                  <input type="tel" className="inputline" name="number" id="" placeholder='+919630******' />
                  <input type="tel" className="inputline" placeholder='+919630******'  name="number" id="" />
                </label>
      <br />
                <label htmlFor="Adress" className="label">
                  <span className="topbar2 addressname">Address</span>
                  <input type="text" value={this.state.Address} onChange={(e)=> this.setState({Address: e.target.value})}  name="adress" id="" placeholder='Address goes here..' className='Address'/>
                </label>
                <div className="state">
                  <label htmlFor="state" className="label"><span className="topbar2">
                    State</span>
                    <select name="code" id="code" defaultValue="Madhya Pradesh" className='dropdown2 widthsmall grey leftmargin' >
                    <option  >Madhya Pradesh</option>
                    <option >UP</option>
                    <option >+21</option>
                </select></label>

                <label htmlFor="state" className='label'>
                  <span className="topbar2">City</span>
                  <select name="code" id="code" className='dropdown2 widthsmall grey' defaultValue="Jhansi" placeholder='jhansi' >
                    <option  >Jhansi</option>
                    <option >Gujrat</option>
                    <option>Bhopal</option>
                    </select>
                </label>
                </div>
    <br />
              <div className="3input">
                <label htmlFor="VenueDate" className="label">
                  <span className="topbar2">Venue Date</span>
                  <span className='topbar2 grey leftmarginsm'>22-01-2022</span>
                </label>

                <label htmlFor="NumberOfPerson" className="label">
                  <span className="topbar2">No. Of Person(min)</span>
                  <input type="text" className='smallinput' placeholder='min' name="NumberOfPerson" id="" />
                </label>

                <label htmlFor="expected">
                  <span className="topbar2">Expected</span>
                  <input type="text" className='smallinput dropdown2' name="" id="" />
                </label>
             
                </div>
                <br />
                <div className="timej">
                <label htmlFor="Time" className="label">
                  <span className="topbar2">Time From</span>
                  <input type="time" name=""  className='smallinput2 dropdown2 ' id="" value="07:30:00" readOnly />
                </label>
                <div className="end">
                <label htmlFor="TimeTo" className='label2 '>
                  <span className="topbar2">Time To</span>
                  <input type="time" name=""  className='smallinput2 dropdown2 ' id="" value="10:36:00" readOnly />
                </label>
                </div>
                </div>
                <label htmlFor="Adress" className="label">
                  <span className="topbar2 addressname">Venue Type</span>
                  <input type="text" name="adress" id="" placeholder='Birthday,Party,Meeting' className='Address'/>
                </label>

               <br />
                <button  className="ui button red">Cancel</button>
                <button  className="ui button blue"> Next ;) </button>
               
                </form>
                </div>
                <br />
               
                
       
      
      </div>
    
  );
}
}

export default RightForm;
