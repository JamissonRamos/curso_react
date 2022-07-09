
const numeros = {
    numeroA: 100,
    numeroB: 80
}

const Challenge = () => 
{
    const{numeroA: A, numeroB: B} = numeros

    return(

        <div>
            <h1> Meu Numero 1: {A} </h1>
            
            <h1> Meu Numero 2: {B} </h1>

            
            <div>
                <button onClick={()=>{console.log(A + B)}}>Some os Valores</button>
            </div>

        </div>
    )
}

export default Challenge;