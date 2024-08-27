import { useState } from "react"

export default function form(){
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState(0);
    const [usuarios, setUsuarios] = useState([])
   async function salvarUsuario(){
       await fetch('/api/form', {
            method: 'POST',
            body: JSON.stringify({
                nome,
                idade
            })
        })
        setNome('')
        setIdade(0)
        const response = await fetch('/api/form')
        const usuarios = await  response.json()
        setUsuarios(usuarios)
    }

    function renderizarUsuarios(){
        return usuarios.map((usuario, index) => {
            return <li key={index}>{usuario.nome} tem {usuario.idade} anos</li>
        })
    }
    return (
        <div>
            <h1>integrando com API #2</h1>
            <input type="text" value={nome} onChange={event => setNome(event.target.value)}/>
            <input type="number" value={idade} onChange={event => setIdade(+event.target.value)}/>
            <button onClick={salvarUsuario}>Enviar</button>
            <ul>
               {renderizarUsuarios()}
            </ul>
        </div>
    )
}