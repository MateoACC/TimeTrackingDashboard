import './TimeCard.css';

function TimeCard(props){

    return(
        <div className='mb-2 mt-2'>  
    <div className='card icon  rounded-4'style={{ backgroundColor: `${props.fondo}`, backgroundImage: `${props.icon}`}}>
     
      </div>
     <div className="card text-end rounded-4 blue" style={{zIndex: '2', marginTop: "-20px"}}>
          <p className='text-start pri'>{props.actividades}</p>
          <h1 className='text-start'>{props.horas}</h1>
          <p className='text-start'>{props.informacion}</p>
   </div>
        </div>
    )
}

export default TimeCard