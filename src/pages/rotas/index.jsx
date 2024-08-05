import Link from "next/Link";
export default function Rotas() {
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
    </div>
  );
}
