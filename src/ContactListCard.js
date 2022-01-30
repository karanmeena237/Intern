import Reac from 'react';

const CardList=(props)=>{
    // Destructuring so that we don't need to use props.contact.name and all
    const style = {
        display: 'block'
    }
   const{CustomerName,CustomerNumber,Address,State,City,NumberOfPerson,Expected,TimeFrom,TimeTo,VenueType} = props.contact;
    return(
        <div className="item">
        <div className="context">
            <div className="header">
                {CustomerName}
            </div>
            <div style={style}>{CustomerNumber}</div>
            <div style={style}>{Address}</div>
            <div style={style}>{State}</div>
            <div style={style}>{City}</div>
            <div style={style}>{NumberOfPerson}</div>
            <div style={style}>{Expected}</div>
            <div style={style}>{TimeFrom}</div>
            <div style={style}>{TimeTo}</div>
            <div >{VenueType}</div>
            <br /></div>
            <i className="trash alternate outline icon" style={{color:"#1f1d2b",fontSize:"16px",marginTop:"8px"}}></i>    
    </div>
    );
};

export default CardList;