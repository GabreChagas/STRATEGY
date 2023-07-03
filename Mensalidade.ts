import { Aluno } from "./Aluno";


export class Mensalidade {
  constructor(
    public aluno: Aluno,
    public valor: number,
    public dataVencimento: string,
    public statusPagamento: string,
    public nomeAluno: string
  ) { }

  static status(mensalidade: Mensalidade): void {
    const dataAtual = new Date();
    const dataVencimento = new Date(mensalidade.dataVencimento);

    if (dataAtual > dataVencimento) {
      mensalidade.statusPagamento = "Atrasado";
    } else if (dataAtual.getMonth() === dataVencimento.getMonth()) {
      mensalidade.statusPagamento = "Pago";
    } else {
      mensalidade.statusPagamento = "Em aberto";
    }
  }
}





