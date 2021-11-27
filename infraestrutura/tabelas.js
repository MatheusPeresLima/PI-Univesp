class tabelas {
    init(conexao) {
        this.conexao = conexao

        this.criaratendimentos()
    }

    criaratendimentos() {
        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, mesa int NOT NULL, pedido varchar(150), status varchar(50) NOT NULL, data datetime NOT NULL, observacoes text, PRIMARY KEY(id))'
        
        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela Atendimentos criada com sucesso')
            }
          
        })
    }
}


module.exports = new tabelas