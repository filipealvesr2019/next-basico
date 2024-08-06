import Link from "next/Link";
import { useRouter } from "next/router";
export default function Rotas() {
  const router = useRouter();
  function navegacaoSimples(url){
    router.push(url)
  }

  function navegacaoComParams(){
    router.push({
      pathname: '/rotas/params',
      query: {
        id: 123,
        nome: 'Ana'
      }
    })
  }
  return (
    <div>
      Rotas Index
      <ul>
        <Link href={"/rotas/params?id=12&nome=Ana"}>
          <li>params</li>
        </Link>
        <Link href={"/rotas/115/buscar"}>
          <li>Buscar</li>
        </Link>
        <Link href={"/rotas/115/daniel"}>
          <li>Daniel</li>
        </Link>
      </ul>
      <div style={{
        display:"flex",
        flexDirection:"column",
        alignItems:"flex-start"
      }}>
       <button onClick={navegacaoComParams}>Params</button>

        <button onClick={() => router.push('/rotas/115/buscar')}>Buscar</button>
        <button onClick={() => navegacaoSimples('/rotas/115/daniel')}>Daniel</button>

      </div>
    </div>
  );
}
