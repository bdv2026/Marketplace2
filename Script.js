function showCategory(category) {
  const vitrine = document.getElementById('vitrine');
  let produtos = '';

  if (category === 'eletronicos') {
    produtos = `
      <h2>Eletrônicos</h2>
      <div>
        <p>Smartphone XYZ</p>
        <button onclick="window.location.href='LINK_AFILIADO_SMARTPHONE'">Comprar</button>
      </div>
      <div>
        <p>Notebook ABC</p>
        <button onclick="window.location.href='LINK_AFILIADO_NOTEBOOK'">Comprar</button>
      </div>
    `;
  }
// Eletrônicos
if (category === 'eletronicos') {
  vitrine.innerHTML = `
    <h2>Eletrônicos</h2>
    <button onclick="window.location.href='https://meli.la/1Wq9Lz7'">
      Ver Eletrônicos
    </button>
  `;
}
// Celulares e Smartphones
if (category === 'celulares') {
  vitrine.innerHTML = `
    <h2>Celulares e Smartphones</h2>
    <button onclick="window.location.href='https://meli.la/1iwDSxb'">
      Ver Celulares e Smartphones
    </button>
  `;
}
// Informática
if (category === 'informatica') {
  vitrine.innerHTML = `
    <h2>Informática</h2>
    <button onclick="window.location.href='https://meli.la/27vMjNx'">
      Ver Informática
    </button>
  `;
}
// TVs e Vídeo
if (category === 'tvs_video') {
  vitrine.innerHTML = `
    <h2>TVs e Vídeo</h2>
    <button onclick="window.location.href='https://meli.la/2MEs3D7'">
      Ver TVs e Vídeo
    </button>
  `;
}
// Áudio
if (category === 'audio') {
  vitrine.innerHTML = `
    <h2>Áudio</h2>
    <button onclick="window.location.href='https://meli.la/2WcvnYH'">
      Ver Áudio
    </button>
  `;
}

// Videogames
if (category === 'videogames') {
  vitrine.innerHTML = `
    <h2>Videogames</h2>
    <button onclick="window.location.href='https://meli.la/1ZTFTpT'">
      Ver Videogames
    </button>
  `;
}
// Câmeras e Drones
if (category === 'cameras_drones') {
  vitrine.innerHTML = `
    <h2>Câmeras e Drones</h2>
    <button onclick="window.location.href='https://meli.la/2HbKj2n'">
      Ver Câmeras e Drones
    </button>
  `;
}

// Acessórios Eletrônicos
if (category === 'acessorios_eletronicos') {
  vitrine.innerHTML = `
    <h2>Acessórios Eletrônicos</h2>
    <button onclick="window.location.href='https://https://meli.la/2TmUqNr'">
      Ver Acessórios Eletrônicos
    </button>
  `;
}

  if (category === 'moda') {
    produtos = `
      <h2>Moda</h2>
      <div>
        <p>Camiseta Estilosa</p>
        <button onclick="window.location.href='https://meli.la/1nKURhz'">Comprar</button>
      </div>
      <div>
        <p>Calça Jeans</p>
        <button onclick="window.location.href='LINK_AFILIADO_CALCA'">Comprar</button>
      </div>
    `;
  }
// Moda Feminina
if (category === 'moda_feminina') {
  vitrine.innerHTML = `
    <h2>Moda Feminina</h2>
    <button onclick="window.location.href='https://meli.la/1mBQovM'">
      Ver Moda Feminina
    </button>
  `;
}
// Moda Infantil Menino
if (category === 'moda_infantil_menino') {
  vitrine.innerHTML = `
    <h2>Moda Infantil - Menino</h2>
    <button onclick="window.location.href='https://meli.la/23kV2Ge'">
      Ver Moda Infantil Menino
    </button>
  `;
}
// Moda Infantil Menina
if (category === 'moda_infantil_menina') {
  vitrine.innerHTML = `
    <h2>Moda Infantil - Menina</h2>
    <button onclick="window.location.href='https://meli.la/2Vu8uyt'">
      Ver Moda Infantil Menina
    </button>
  `;
}
// Acessórios
if (category === 'acessorios') {
  vitrine.innerHTML = `
    <h2>Acessórios</h2>
    <button onclick="window.location.href='https://meli.la/2iWB7sK'">
      Ver Acessórios
    </button>
  `;
}

// Moda Masculina
if (category === 'moda_masculina') {
  vitrine.innerHTML = `
    <h2>Moda Masculina</h2>
    <button onclick="window.location.href='https://meli.la/2Y3ucop'">
      Ver Moda Masculina
    </button>
  `;
}

// Calçados
if (category === 'calcados') {
  vitrine.innerHTML = `
    <h2>Calçados</h2>
    <button onclick="window.location.href='https://meli.la/1CnGh8G'">
      Ver Calçados
    </button>
  `;
}

// Moda Esportiva
if (category === 'moda_esportiva') {
  vitrine.innerHTML = `
    <h2>Moda Esportiva</h2>
    <button onclick="window.location.href='https://meli.la/23ZtLi1'">
      Ver Moda Esportiva
    </button>
  `;
}
  if (category === 'casa') {
    produtos = `
      <h2>Casa & Decoração</h2>
      <div>
        <p>Luminária Moderna</p>
        <button onclick="window.location.href='LINK_AFILIADO_LUMINARIA'">Comprar</button>
      </div>
    `;
  }
// Casa, Móveis e Decoração
if (category === 'casa') {
  vitrine.innerHTML = `
    <h2>Casa, Móveis e Decoração</h2>
    <button onclick="window.location.href='https://meli.la/1qaFsHG'">
      Ver Casa, Móveis e Decoração
    </button>
  `;
}
// Móveis
if (category === 'moveis') {
  vitrine.innerHTML = `
    <h2>Móveis</h2>
    <button onclick="window.location.href='https://meli.la/1AeN8FT'">
      Ver Móveis
    </button>
  `;
}
// Cozinha
if (category === 'cozinha') {
  vitrine.innerHTML = `
    <h2>Cozinha</h2>
    <button onclick="window.location.href='https://meli.la/23XG8Jk'">
      Ver Cozinha
    </button>
  `;
}
// Cama, Mesa e Banho
if (category === 'cama_mesa_banho') {
  vitrine.innerHTML = `
    <h2>Cama, Mesa e Banho</h2>
    <button onclick="window.location.href='https://meli.la/2DU1s4f'">
      Ver Cama, Mesa e Banho
    </button>
  `;
}

// Decoração
if (category === 'decoracao') {
  vitrine.innerHTML = `
    <h2>Decoração</h2>
    <button onclick="window.location.href='https://meli.la/1yD4QQM'">
      Ver Decoração
    </button>
  `;
}
// Iluminação
if (category === 'iluminacao') {
  vitrine.innerHTML = `
    <h2>Iluminação</h2>
    <button onclick="window.location.href='https://meli.la/2yLcCQ9'">
      Ver Iluminação
    </button>
  `;
}

// Organização e Limpeza
if (category === 'organizacao_limpeza') {
  vitrine.innerHTML = `
    <h2>Organização e Limpeza</h2>
    <button onclick="window.location.href='https://meli.la/1i7qrmi'">
      Ver Organização e Limpeza
    </button>
  `;
}

// Jardinagem e Exterior
if (category === 'jardinagem_exterior') {
  vitrine.innerHTML = `
    <h2>Jardinagem e Exterior</h2>
    <button onclick="window.location.href='https://meli.la/23KA55W'">
      Ver Jardinagem e Exterior
    </button>
  `;
}

// Climatização
if (category === 'climatizacao') {
  vitrine.innerHTML = `
    <h2>Climatização</h2>
    <button onclick="window.location.href='https://meli.la/2hf8CV1'">
      Ver Climatização
    </button>
  `;
}
// Eletrodomésticos
if (category === 'eletrodomesticos') {
  vitrine.innerHTML = `
    <h2>Eletrodomésticos</h2>
    <button onclick="window.location.href='https://meli.la/2qSfEtu'">
      Ver Eletrodomésticos
    </button>
  `;
}
// Geladeiras e Freezers
if (category === 'geladeiras_freezers') {
  vitrine.innerHTML = `
    <h2>Geladeiras e Freezers</h2>
    <button onclick="window.location.href='https://meli.la/2gMKGyY'">
      Ver Geladeiras e Freezers
    </button>
  `;
}

// Fogões e Fornos
if (category === 'fogoes_fornos') {
  vitrine.innerHTML = `
    <h2>Fogões e Fornos</h2>
    <button onclick="window.location.href='https://meli.la/2SqnvwJ'">
      Ver Fogões e Fornos
    </button>
  `;
}

// Máquinas de Lavar e Secar
if (category === 'lavar_secar') {
  vitrine.innerHTML = `
    <h2>Máquinas de Lavar e Secar</h2>
    <button onclick="window.location.href='https://meli.la/1KqApy2'">
      Ver Máquinas de Lavar e Secar
    </button>
  `;
}

// Micro-ondas
if (category === 'microondas') {
  vitrine.innerHTML = `
    <h2>Micro-ondas</h2>
    <button onclick="window.location.href='https://meli.la/1RT9gw7'">
      Ver Micro-ondas
    </button>
  `;
}

// Aspiradores de Pó
if (category === 'aspiradores') {
  vitrine.innerHTML = `
    <h2>Aspiradores de Pó</h2>
    <button onclick="window.location.href='https://meli.la/2nui1UN'">
      Ver Aspiradores de Pó
    </button>
  `;
}

// Climatização
if (category === 'climatizacao') {
  vitrine.innerHTML = `
    <h2>Climatização</h2>
    <button onclick="window.location.href='https://meli.la/1AaSeUA'">
      Ver Climatização
    </button>
  `;
}

// Pequenos Eletrodomésticos
if (category === 'pequenos_eletrodomesticos') {
  vitrine.innerHTML = `
    <h2>Pequenos Eletrodomésticos</h2>
    <button onclick="window.location.href='https://meli.la/1Ag7q3t'">
      Ver Pequenos Eletrodomésticos
    </button>
  `;
}

  if (category === 'beleza') {
    produtos = `
      <h2>Beleza & Saúde</h2>
      <div>
        <p>Kit Skincare</p>
        <button onclick="window.location.href='LINK_AFILIADO_SKINCARE'">Comprar</button>
      </div>
    `;
  }
// Beleza e Cuidado Pessoal
if (category === 'beleza') {
  vitrine.innerHTML = `
    <h2>Beleza e Cuidado Pessoal</h2>
    <button onclick="window.location.href='https://meli.la/2U3E7Zg'">
      Ver Beleza e Cuidado Pessoal
    </button>
  `;
}

// Perfumes
if (category === 'perfumes') {
  vitrine.innerHTML = `
    <h2>Perfumes</h2>
    <button onclick="window.location.href='https://meli.la/1QwAAYy'">
      Ver Perfumes
    </button>
  `;
}

// Maquiagem
if (category === 'maquiagem') {
  vitrine.innerHTML = `
    <h2>Maquiagem</h2>
    <button onclick="window.location.href='https://meli.la/2ocNcPG'">
      Ver Maquiagem
    </button>
  `;
}

// Cabelo
if (category === 'cabelo') {
  vitrine.innerHTML = `
    <h2>Cabelo</h2>
    <button onclick="window.location.href='https://meli.la/2huvkYF'">
      Ver Produtos para Cabelo
    </button>
  `;
}

// Cuidados com a Pele
if (category === 'pele') {
  vitrine.innerHTML = `
    <h2>Cuidados com a Pele</h2>
    <button onclick="window.location.href='https://meli.la/2dwLgW2'">
      Ver Cuidados com a Pele
    </button>
  `;
}

// Higiene Pessoal
if (category === 'higiene') {
  vitrine.innerHTML = `
    <h2>Higiene Pessoal</h2>
    <button onclick="window.location.href='https://meli.la/2iyE8vL'">
      Ver Higiene Pessoal
    </button>
  `;
}
// Saúde
if (category === 'saude') {
  vitrine.innerHTML = `
    <h2>Saúde</h2>
    <button onclick="window.location.href='https://meli.la/2fb8zY6'">
      Ver Saúde
    </button>
  `;
}
// Equipamentos Médicos
if (category === 'equipamentos_medicos') {
  vitrine.innerHTML = `
    <h2>Equipamentos Médicos</h2>
    <button onclick="window.location.href='https://meli.la/1WBoLmB'">
      Ver Equipamentos Médicos
    </button>
  `;
}

// Suplementos
if (category === 'suplementos') {
  vitrine.innerHTML = `
    <h2>Suplementos</h2>
    <button onclick="window.location.href='https://meli.la/2Xf8YfW'">
      Ver Suplementos
    </button>
  `;
}

// Ortopedia
if (category === 'ortopedia') {
  vitrine.innerHTML = `
    <h2>Ortopedia</h2>
    <button onclick="window.location.href='https://meli.la/1xEU9LK'">
      Ver Ortopedia
    </button>
  `;
}

// Bem-estar
if (category === 'bem_estar') {
  vitrine.innerHTML = `
    <h2>Bem-estar</h2>
    <button onclick="window.location.href='https://meli.la/24UAwp6'">
      Ver Bem-estar
    </button>
  `;
}

  if (category === 'esportes') {
    produtos = `
      <h2>Esportes & Lazer</h2>
      <div>
        <p>Bicicleta Mountain Bike</p>
        <button onclick="window.location.href='LINK_AFILIADO_BIKE'">Comprar</button>
      </div>
    `;
  }
// Esportes e Fitness
if (category === 'esportes_fitness') {
  vitrine.innerHTML = `
    <h2>Esportes e Fitness</h2>
    <button onclick="window.location.href='https://meli.la/1DS51Sh'">
      Ver Esportes e Fitness
    </button>
  `;
}
// Bicicletas
if (category === 'bicicletas') {
  vitrine.innerHTML = `
    <h2>Bicicletas</h2>
    <button onclick="window.location.href='https://meli.la/2f4xu7W'">
      Ver Bicicletas
    </button>
  `;
}

// Academia e Musculação
if (category === 'academia') {
  vitrine.innerHTML = `
    <h2>Academia e Musculação</h2>
    <button onclick="window.location.href='https://meli.la/2knFuXs'">
      Ver Academia e Musculação
    </button>
  `;
}

// Roupas Esportivas
if (category === 'roupas_esportivas') {
  vitrine.innerHTML = `
    <h2>Roupas Esportivas</h2>
    <button onclick="window.location.href='https://meli.la/23sTJsQ'">
      Ver Roupas Esportivas
    </button>
  `;
}

// Acessórios Fitness
if (category === 'acessorios_fitness') {
  vitrine.innerHTML = `
    <h2>Acessórios Fitness</h2>
    <button onclick="window.location.href='https://meli.la/1YB7efD'">
      Ver Acessórios Fitness
    </button>
  `;
}

// Esportes Coletivos
if (category === 'esportes_coletivos') {
  vitrine.innerHTML = `
    <h2>Esportes Coletivos</h2>
    <button onclick="window.location.href='https://meli.la/1GKsboM'">
      Ver Esportes Coletivos
    </button>
  `;
}

// Automóveis e Acessórios
if (category === 'automoveis') {
  vitrine.innerHTML = `
    <h2>Automóveis e Acessórios</h2>
    <button onclick="window.location.href='https://meli.la/25A7H8t'">
      Ver Automóveis e Acessórios
    </button>
  `;
}

// Peças Automotivas
if (category === 'pecas') {
  vitrine.innerHTML = `
    <h2>Peças Automotivas</h2>
    <button onclick="window.location.href='https://meli.la/1yXLUeJ'">
      Ver Peças Automotivas
    </button>
  `;
}

// Pneus
if (category === 'pneus') {
  vitrine.innerHTML = `
    <h2>Pneus</h2>
    <button onclick="window.location.href='https://meli.la/2XGDfqF'">
      Ver Pneus
    </button>
  `;
}

// Som Automotivo
if (category === 'som_automotivo') {
  vitrine.innerHTML = `
    <h2>Som Automotivo</h2>
    <button onclick="window.location.href='https://meli.la/1amBMFM'">
      Ver Som Automotivo
    </button>
  `;
}

// Acessórios Internos
if (category === 'acessorios_internos') {
  vitrine.innerHTML = `
    <h2>Acessórios Internos</h2>
    <button onclick="window.location.href='https://meli.la/1zuUqfU'">
      Ver Acessórios Internos
    </button>
  `;
}

// Acessórios Externos
if (category === 'acessorios_externos') {
  vitrine.innerHTML = `
    <h2>Acessórios Externos</h2>
    <button onclick="window.location.href='https://meli.la/1LRPdPu'">
      Ver Acessórios Externos
    </button>
  `;
}

// Ferramentas e Construção
if (category === 'ferramentas_construcao') {
  vitrine.innerHTML = `
    <h2>Ferramentas e Construção</h2>
    <button onclick="window.location.href='https://meli.la/1ihiR8K'">
      Ver Ferramentas e Construção
    </button>
  `;
}

// Ferramentas Manuais
if (category === 'ferramentas_manuais') {
  vitrine.innerHTML = `
    <h2>Ferramentas Manuais</h2>
    <button onclick="window.location.href='https://meli.la/117pRPd'">
      Ver Ferramentas Manuais
    </button>
  `;
}

// Ferramentas Elétricas
if (category === 'ferramentas_eletricas') {
  vitrine.innerHTML = `
    <h2>Ferramentas Elétricas</h2>
    <button onclick="window.location.href='https://meli.la/1fXfZ8y'">
      Ver Ferramentas Elétricas
    </button>
  `;
}

// Máquinas Industriais
if (category === 'maquinas_industriais') {
  vitrine.innerHTML = `
    <h2>Máquinas Industriais</h2>
    <button onclick="window.location.href='https://meli.la/2WoihRu'">
      Ver Máquinas Industriais
    </button>
  `;
}

// Materiais de Construção
if (category === 'materiais_construcao') {
  vitrine.innerHTML = `
    <h2>Materiais de Construção</h2>
    <button onclick="window.location.href='https://meli.la/2X3YaNc'">
      Ver Materiais de Construção
    </button>
  `;
}

// Equipamentos de Proteção
if (category === 'equipamentos_protecao') {
  vitrine.innerHTML = `
    <h2>Equipamentos de Proteção</h2>
    <button onclick="window.location.href='https://meli.la/2U3HWxz'">
      Ver Equipamentos de Proteção
    </button>
  `;
}

// Brinquedos e Hobbies
if (category === 'brinquedos_hobbies') {
  vitrine.innerHTML = `
    <h2>Brinquedos e Hobbies</h2>
    <button onclick="window.location.href='https://meli.la/1sJdQAS'">
      Ver Brinquedos e Hobbies
    </button>
  `;
}
// Brinquedos Educativos
if (category === 'brinquedos_educativos') {
  vitrine.innerHTML = `
    <h2>Brinquedos Educativos</h2>
    <button onclick="window.location.href='https://meli.la/17RzFds'">
      Ver Brinquedos Educativos
    </button>
  `;
}

// Jogos e Puzzles
if (category === 'jogos_puzzles') {
  vitrine.innerHTML = `
    <h2>Jogos e Puzzles</h2>
    <button onclick="window.location.href='https://meli.la/1qbgPRk'">
      Ver Jogos e Puzzles
    </button>
  `;
}

// Colecionáveis
if (category === 'colecionaveis') {
  vitrine.innerHTML = `
    <h2>Colecionáveis</h2>
    <button onclick="window.location.href='https://meli.la/1YTe5Yq'">
      Ver Colecionáveis
    </button>
  `;
}

// Instrumentos Musicais
if (category === 'instrumentos_musicais') {
  vitrine.innerHTML = `
    <h2>Instrumentos Musicais</h2>
    <button onclick="window.location.href='https://meli.la/1jHyoE1'">
      Ver Instrumentos Musicais
    </button>
  `;
}

// Modelismo
if (category === 'modelismo') {
  vitrine.innerHTML = `
    <h2>Modelismo</h2>
    <button onclick="window.location.href='https://meli.la/2uCUf9x'">
      Ver Modelismo
    </button>
  `;
}

// Animais
if (category === 'animais') {
  vitrine.innerHTML = `
    <h2>Animais</h2>
    <button onclick="window.location.href='https://meli.la/2Z6emfK'">
      Ver Animais
    </button>
  `;
}

// Rações
if (category === 'racoes') {
  vitrine.innerHTML = `
    <h2>Rações</h2>
    <button onclick="window.location.href='https://meli.la/1thYHCT'">
      Ver Rações
    </button>
  `;
}

// Acessórios para Pets
if (category === 'acessorios_pets') {
  vitrine.innerHTML = `
    <h2>Acessórios para Pets</h2>
    <button onclick="window.location.href='https://meli.la/2hcNpxA'">
      Ver Acessórios para Pets
    </button>
  `;
}

// Brinquedos para Pets
if (category === 'brinquedos_pets') {
  vitrine.innerHTML = `
    <h2>Brinquedos para Pets</h2>
    <button onclick="window.location.href='https://meli.la/25m7bnN'">
      Ver Brinquedos para Pets
    </button>
  `;
}

// Cuidados e Higiene
if (category === 'cuidados_higiene') {
  vitrine.innerHTML = `
    <h2>Cuidados e Higiene</h2>
    <button onclick="window.location.href='https://meli.la/29GDdpW'">
      Ver Cuidados e Higiene
    </button>
  `;
}

// Supermercado
if (category === 'supermercado') {
  vitrine.innerHTML = `
    <h2>Supermercado</h2>
    <button onclick="window.location.href='https://meli.la/2qiZs15'">
      Ver Supermercado
    </button>
  `;
}
// Alimentos
if (category === 'alimentos') {
  vitrine.innerHTML = `
    <h2>Alimentos</h2>
    <button onclick="window.location.href='https://meli.la/1Bz4dED'">
      Ver Alimentos
    </button>
  `;
}

// Bebidas
if (category === 'bebidas') {
  vitrine.innerHTML = `
    <h2>Bebidas</h2>
    <button onclick="window.location.href='https://meli.la/2mGxYGr'">
      Ver Bebidas
    </button>
  `;
}

// Produtos de Limpeza
if (category === 'limpeza') {
  vitrine.innerHTML = `
    <h2>Produtos de Limpeza</h2>
    <button onclick="window.location.href='https://meli.la/1CjzuMN'">
      Ver Produtos de Limpeza
    </button>
  `;
}

// Higiene e Cuidados
if (category === 'higiene_cuidados') {
  vitrine.innerHTML = `
    <h2>Higiene e Cuidados</h2>
    <button onclick="window.location.href='https://meli.la/1Ni757a'">
      Ver Higiene e Cuidados
    </button>
  `;
}






