import React, { useEffect, useState } from 'react';

export default function App() {
  const [repositorios, setRepositorios] = useState([
   // { id: 1, name: "repo-1" }, //{ id: 2, name: "repo-2" }, //{ id: 3, name: "repo-3" },
  ]);
//   const [favorites, setFavorites] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const response = await fetch('https://api.github.com/users/Iyonissio/repos');
    const data = await response.json();

    setRepositorios(data);
  }, []);

  //function handleAddRepositorio() {
    //setRepositorios([...repositorios, 
     // { id: Math.random(), name: "Novo repo"} 
    //]);
 // }
  function handleFavorite(id) {
     const newRepositorios = repositorios.map(repo => {
        return repo.id === id ? { ...repo, favorite: !repo.favorite } : repo
     });

     setRepositorios(newRepositorios);
  }

  return (
  //   <> 
       <ul>
          {repositorios.map(repo => (
            <li key={repo.id}>
              {repo.name}
              {repo.favorite && <span>(Favorito)</span>}
              <button onClick={() => handleFavorite(repo.id)}>Favoritar</button>
              </li>
          ))}
        </ul>
      //  <button onClick={handleAddRepositorio}>
        //    Adicionar Repositorio
        //</button>
 //      </>
  );
}
