import profilePic from './assets/pfp.jpg'


function Card() {
    return (
        <div className="card">
             <img className="card-image"  src={profilePic} alt="profile Picture" />
             <h2 className= "card-title">melanie</h2>
             <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat.</p>
        </div>
    ); 
} 

export default Card