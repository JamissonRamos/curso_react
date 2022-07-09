
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

            {/* Mais correto de se usar */}
            <div>
                <button onClick={handleMyEvents}> Clique Aqui </button>
            </div>

            {/* Quando for um código muito pequeno  */}
            <div>
                <button onClick={()=>{ console.log('clicou 2') }}> Clique Aqui 2 </button>
            </div>

            {/* Esse método não é recomendado  */}
            <div>
                <button onClick={()=>{ 
                    if(true){
                        console.log('clicou 3')
                    } 
                }}> Clique Aqui 3 </button>
            </div>



        </div>
    )

};

    // const handleMyEvents = (e) =>{
        //console.log(e)     
        //console.log('clicou')
    //}; //funciona perfeitamente

export default Eventos;