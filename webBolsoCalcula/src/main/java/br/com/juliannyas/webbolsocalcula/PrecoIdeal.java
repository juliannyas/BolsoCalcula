package br.ufg.inf;

import java.util.Scanner;

public class PrecoIdeal {

    private static Scanner stdin = new Scanner(System.in);

    public static void main(String[] args) {

        System.out.println("===============");
        System.out.println("| Preço Ideal |");
        System.out.println("===============\n");

        System.out.println("1 - Calcular Elasticidade\n");
        System.out.println("2 - Calcular Quantidade ideal\n");
        System.out.print("Opcao: ");

        int opcao = stdin.nextInt();

        switch (opcao) {
            case 1:
                System.out.println("\n===============");
                System.out.println("| Elasticidade |");
                System.out.println("===============\n");
                menuElasticidade();
                System.out.println("===============\n");
                break;

            case 2:
                System.out.println("\n====================");
                System.out.println("| Quantidade Ideal |");
                System.out.println("===================\n");
                menuQuantidadeIdeal();
                System.out.println("===================\n");
                break;

            default:
        }

    }

    public static void menuElasticidade() {

        System.out.print("Digite o preço praticado: ");
        double pa = stdin.nextDouble();
        System.out.print("Digite o preço final (preço proposto): ");
        double pf = stdin.nextDouble();
        System.out.print("Digite a quantidade atual (normalmente vende): ");
        int qa = stdin.nextInt();
        System.out.print("Digite a quantidade proposta: ");
        int qp = stdin.nextInt();

        double elasticidade = PrecoIdealController.calculaElasticidade(pa, pf, (double) qa, (double) qp);
        System.out.println("\nElasticidade do produto: " + elasticidade + "%");
    }

    public static void menuQuantidadeIdeal() {

        System.out.print("Digite a elasticidade: ");
        double elasticidade = stdin.nextDouble();
        System.out.print("Digite o preço praticado: ");
        double pa = stdin.nextDouble();
        System.out.print("Digite o preço final (preço proposto): ");
        double pf = stdin.nextDouble();
        System.out.print("Digite a quantidade atual (normalmente vende): ");
        int qa = stdin.nextInt();

        double quantidade = PrecoIdealController.calculaQtdeIdealMensal(elasticidade, pa, pf, qa);
        System.out.println("\nQuantidade proposta: " + quantidade);
    }
}
