import MyComponents from "./MyComponents";

// Meu primeiro componente no react
const FirstComponents = () => {

    /* comentando o código de return da função */

    return (

        <div className='teste'> 

            {/* Comentando o código abaixo */}

            <h1> Criando comentário no componente do React </h1> 

            {/* Consigo gerar o componet dentro e fora da tag html/ jsx */}
            
           <h4> dentro da tag H4 <MyComponents /> </h4>
            
        </div>
    );

};

export default FirstComponents