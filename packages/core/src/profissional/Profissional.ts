// import { Agendamento } from "../agendamento";
export default interface Profissional {
  id: number;
  nome: string;
  descricao: string;
  imagemUrl: string;
  avaliacao: number;
  quantidadeAvaliacoes: number;
  // agendamentos?: Agendamento[]
}