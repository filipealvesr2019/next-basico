const usuarios = []
export default function form(req, res){
    if(req.method === 'POST'){
        post(req, res)
    } else if(req.method === 'GET'){
       get(req, res)
    }else{
        res.status(405).send('Method Not Allowed')
    }
}

function get(req, res) {
    res.status(200).json(usuarios)
}


function post(req, res) {
    const dados = JSON.parse(req.body)
    usuarios.push(dados)
    res.status(200).send()
}