export default function UserCard({ user: { id, name, username, email, address: { street, suite, city, zipcode, geo: { lat, lng } } } }) {
    return (
    <>
        <p>Id: {id}</p>
        <p>Name: {name}</p>
        <p>Username: {username}</p>
        <p>Email: {email}</p>
        <p>Address: </p> 
        <p>street: {street},</p> 
        <p>suite: {suite},</p>  
        <p> city: {city},</p> 
        <p>zipcode: {zipcode},</p> 
        <p>geo:</p>   
        <p> lat: {lat},</p> 
        <p> lng: {lng}</p> 
            
    </>
    );
}