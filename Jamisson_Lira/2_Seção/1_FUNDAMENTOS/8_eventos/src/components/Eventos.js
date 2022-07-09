
const handleMyEvents = (e) => { 
    console.log(e) 
    console.log('clicou') 
} //funciona perfeitamente

const Eventos = () =>
{
    // const handleMyEvents = (e) =>{
        //console.log(e)     
        //console.log('clicou')
    //}; //funciona perfeitamente

    return(
        <div>
            {/* { const handleMyEvents = (e) =>{ console.log('clicou') } } NÃO FUNCIONAR NESSA PARTE DO CÓDIGO*/}

            <div>
                <button onClick={handleMyEvents}> Clique Aqui </button>
            </div>

        </div>
    )

};

    // const handleMyEvents = (e) =>{
        //console.log(e)     
        //console.log('clicou')
    //}; //funciona perfeitamente

export default Eventos;