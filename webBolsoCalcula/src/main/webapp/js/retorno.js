function calculaRetornos() {
    var tipo = parseFloat(document.CalculaRetorno.tipoRetorno.value);
    var liquido = parseFloat(document.CalculaRetorno.liquido.value);
    var vendas = parseFloat(document.CalculaRetorno.vendas.value);
    var ativos = parseFloat(document.CalculaRetorno.ativos.value);
    var operacional = parseFloat(document.CalculaRetorno.operacional.value);
    var investimentos = parseFloat(document.CalculaRetorno.investimentos.value);

    if (tipo === 1){
        var temp = liquido / vendas;
        var temp2 = vendas / ativos;
        var resul = temp * temp2;
        document.CalculaRetorno.resulRetorno.value = resul;
    }else if(tipo === 2){
        document.CalculaRetorno.resulRetorno.value = liquido / ativos;
    }else{
        document.CalculaRetorno.resulRetorno.value = operacional / investimentos;
    }
}