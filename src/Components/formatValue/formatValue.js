function FormatValue () {
    return (

        ValorTotal.totoLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

    )
}


export default FormatValue;