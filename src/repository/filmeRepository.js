import con from "./connection.js";


export default  async function salvarFilme(filme){
    const comando = `
    ////codigo do banco de dados
    `
    let resposta= await con.query(comando[id, filme.nome])//entre chaves é cada atributo que você colocará em ponto de interrogação
    let info= resposta[0] /// resposta é obtida a partir da posição 0
    let id = info.insertId
    return id
    
}