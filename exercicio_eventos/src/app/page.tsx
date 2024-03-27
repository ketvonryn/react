'use client'

import { useState } from "react";

function Page(){
  //the list
  const [list, setList] = useState([
    {label: "clique para deletar"},
    {label: "uma tarefa aqui"},
    {label: "outra tarefa aqui"}
  ])

  //read the input and add label in list
  const [label, setLabel] = useState('');

  function adicionou(){
    if (label.trim() === "") return;
    setList([ ...list, {label: label} ])
    setLabel("")
  }

  //remove label of the list
  function removeu(labelToRemove: string) {
    setList(prevList => prevList.filter(item => item.label !== labelToRemove));
  }
  
  return(
    <div className="bg-white w-screen h-screen text-black flex flex-col items-center">
      <h1 className="text-4xl font-bold m-5">Lista de Tarefas</h1>
      <div className="bg-amber-500 rounded-md p-4">
        <input
          className="p-2 rounded-md"
          type="text" 
          value={label}
          onChange={e => setLabel(e.target.value)} //recebe o valor digitado e armazena em "label"
          placeholder="O que voce precisa fazer?"/>
        <button 
          className="bg-blue-500 rounded-full p-2 ml-3 text-white font-bold"
          onClick={adicionou}
          >ADD
        </button>
      </div>

      <ul className="list-decimal m-5">
        {list.map((i) =>
          <li>
            <button
              onClick={e => removeu(i.label)}
              className="hover:line-through">
              {i.label}
            </button></li>
        )}
      </ul>
    </div>
  )
}

export default Page;