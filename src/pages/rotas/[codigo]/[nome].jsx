import Link from "next/Link"
import { useRouter } from "next/router"

export default function nome(){
    const router = useRouter()
    const codigo = router.query.codigo
    const nome = router.query.nome
    return (
        <div>
            <h1>  Rotas / {codigo} / {nome}</h1>
            <Link href={'/rotas'}>
           <button>Voltar</button>
           </Link>
        </div>
    )
}