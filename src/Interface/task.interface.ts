/* Atributos: ID, título, descrição, 
data de criação, data de conclusão, tipo, categoria (opcional), 
status (pendente, em andamento, concluída), e usuário associado. */

export interface taskInterface{
    id: number
    titulo: string
    descricao: string
    dataCriacao: Date
    dataConclusao: Date
    status: string
}