export interface Projeto {
    id: string;
    titulo: string;
    descricao: string;
    dtCriacao: firebase.firestore.Timestamp;
}