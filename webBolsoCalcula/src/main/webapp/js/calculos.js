function calculaRetornos() {
    
    var tipo = document.CalculaRetorno.tipoRetorno.value;
    var liquido = document.CalculaRetorno.liquido.value;
    var vendas = document.CalculaRetorno.vendas.value;
    var ativos = document.CalculaRetorno.ativos.value;
    var operacional = document.CalculaRetorno.operacional.value;
    var investimentos = document.CalculaRetorno.investimentos.value;

    if (tipo === 1) {
        var temp = liquido / vendas;
        var temp2 = vendas / ativos;
        document.CalculaRetorno.resulRetorno.value = temp * temp2;
    } else if (tipo === 2) {
        document.CalculaRetorno.resulRetorno.value = liquido / ativos;
    } else if (tipo === 3) {
        document.CalculaRetorno.resulRetorno.value = operacional / investimentos;
    }
}

function calcularElasticidade() {

    var praticado = document.CalculaElasticidade.praticado.value;
    var final = document.CalculaElasticidade.final.value;
    var qtdAtual = document.CalculaElasticidade.qtdAtual.value;
    var qtdProposto = document.CalculaElasticidade.qtdProposto.value;

    var vp = final - praticado;
    var vpfinal = vp / praticado;
    var vq = qtdProposto - qtdAtual;
    var vqfinal = vq / qtdAtual;
    var elasticidade = vqfinal / vpfinal;

    var qtdTemp = elasticidade * vp + 1;
    var qtdIdeal = qtdAtual / qtdTemp;

    document.CalculaElasticidade.resulElasticidade.value = elasticidade;
    document.CalculaElasticidade.resulQtdIdeal.value = qtdIdeal;
}

function calcularIcms() {

    var bc_st = document.CalculaIcms.bc.value;
    var aliquota = document.CalculaIcms.aliquota.value;
    var icms_normal = document.CalculaIcms.icmsnormal.value;

    var icmsTemp = bc_st * aliquota;
    var icms_st = icmsTemp - icms_normal;

    document.CalculaIcms.resulicms.value = icms_st;
}