
    const renderSomething = (x) =>
    {
        if(x) return <h1> Renderizou isso aqui </h1> 
        else return <h1> Renderizou isso aqui também </h1>
    }

const Eventos = () =>
{
    // const renderSomething = (x) =>
    // {
    //     if(x) return <h1> Renderizou isso aqui </h1> 
    //     else return <h1> Renderizou isso aqui também </h1>
    // }

    return(
        
        <div>
            <div>
                {renderSomething(true)}
                {renderSomething(false)}
            </div>

        </div>
    )

};

// const renderSomething = (x) =>
// {
//     if(x) return <h1> Renderizou isso aqui </h1> 
//     else return <h1> Renderizou isso aqui também </h1>
// }

export default Eventos;