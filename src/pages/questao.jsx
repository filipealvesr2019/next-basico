import { useEffect, useState } from "react";

export default function questao() {
  const [questao, setQuestao] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/questao/123")
      .then((response) => response.json())
      .then(setQuestao);
  }, []);

  function renderizarRespostas() {
    if (questao) {
      return questao.respostas.map((response, index) => 
      {
        return <li key={index}>{response}</li>
      }
     
      );
    }
    return false;
  }
  return (
    <>
      <h1>Questao</h1>
      <div>
        <span>{questao?.enunciado}</span>
        <ul>
          <li>{renderizarRespostas()}</li>
        </ul>
      </div>
    </>
  );
}
