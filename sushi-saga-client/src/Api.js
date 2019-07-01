
export function getSushis(){

    return fetch('http://localhost:3000/sushis')
    .then(r => r.json())
    
    }
    
export default getSushis 