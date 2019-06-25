export class Order {
    IdPedido: number;
    Mesa: {
        IdMesa: number;
        Status: string;
    };
    Atendente: {
        IdAtendente: number;
        Nome: string;
    };
    HoraAbertura: string; 
    ValorTotal: string;
}
