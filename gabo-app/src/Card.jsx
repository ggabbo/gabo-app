import profilePic from './assets/dog.jpg'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Gabo</h2>
            <p className="card-text" >Como plástico e dou o rabao</p>
        </div>
    );
}

export default Card