

const data = {
    nome: 'Jamisson Lira Ramos',
    idade: 27,
    job: 'programador'
}

const TemplateExpressions = () => 
{
    const {nome, idade, job} = data

    return (

        <div>

            <h1> Olá {nome}, seja bem-vindo! </h1>

            <p> Qual a sua idade: {idade} anos </p>

            <p> Qual a sua profissão: {job} </p>

            {/* Dar para colocar função js dentro do jsx */}
            <p> Calculo de nível de programação { Math.floor(Math.random() * 10 ) + 1} </p> 

        </div>
    )
}

export default TemplateExpressions;