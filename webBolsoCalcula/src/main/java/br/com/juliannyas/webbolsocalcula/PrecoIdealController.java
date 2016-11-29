package br.ufg.inf;

public class PrecoIdealController {

    /**
     * Calcula a elasticidade do preço na procura.
     *
     * @param pa Preço anterior (preço praticado) (Pa)
     * @param pf Preço final (preço proposto) (Pf)
     * @param qa Quantidade atual (normalmente vende....) (Qa)
     * @param qf Quantidade proposta / ideal / efetiva / final (Qp)
     *
     * @return o épsilon da elasticidade.
     */
    public static double calculaElasticidade(double pa, double pf, double qa, double qf) {

        double vp = ((pf - pa) / pa);
        double vq = ((qf - qa) / qa);

        double elasticidade = vq / vp;
        return elasticidade;
    }

    /**
     *
     * Calcula a relação entre o preço final e a quantidade final.
     *
     * @param elasticidade elasticidade do preço na procura
     * @param pa Preço anterior (preço praticado) (Pa)
     * @param pf Preço final (preço proposto) (Pf)
     * @param qa Quantidade atual (normalmente vende....) (Qa)
     * @return a relação entre o preço final e a quantidade final.
     */
    public static double calculaQtdeIdealMensal(double elasticidade, double pa, double pf, double qa) {

        double vp = ((pf - pa) / pa);
        double qf = qa / (elasticidade * vp + 1);

        return (qf);
    }

    public static double calculaVariacaoPreco(double pa, double pf) {

        double variacao = ((pf - pa) / pa);
        return (variacao * 100);
    }
}
