function calculaElasticidade() {
    var praticado = parseFloat(document.Elasticidade.praticado.value);
    var final = parseFloat(document.Elasticidade.final.value);
    var qtdAtual = parseFloat(document.Elasticidade.qtdAtual.value);
    var qtdProposto = parseFloat(document.Elasticidade.qtdProposto.value);
    
    var vp = final - praticado;
    var vpfinal = vp / praticado;
    var vq = qtdProposto - qtdAtual;
    var vqfinal = vq / qtdAtual;
    
    var elasticidade = vqfinal / vpfinal;
    var qtdIdeal = qtdAtual / (elasticidade * vp + 1);
    
    document.Elasticidade.resulElasticidade.value = elasticidade;
    document.Elasticidade.resulQtdIdeal.value = qtdIdeal;
}


