import Link from "next/Link"
import { useRouter } from "next/router"

export default function Rotas(){
    const router = useRouter()
    const codigo = router.query.codigo
    return (
        <div>
            <h1>  Rotas / {codigo} /Buscar!!</h1>
            <Link href={'/rotas'}>
           <button>Voltar</button>
           </Link>
        </div>
    )
}