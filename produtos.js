const DATA = [
  {
    id: '01',
    nome: 'Booster Evoluções Prismáticas',
    preco: 'R$ 59,90',
    image: require(''),
    descricao: 'Booster Pack da coleção Evoluções Prismáticas, com 6 cartas, incluindo raras e holográficas. Expanda sua coleção com Pokémon em suas formas mais poderosas.',
    categoria: 'Booster',
    localEnvio: 'São Paulo, SP',
    estoque: 34
  },
  {
    id: '02',
    nome: 'Box Coleção Amigos de Jornada',
    preco: 'R$ 139,90',
    image: require(''),
    descricao: 'Pack de Coleção Amigos de Jornada, com cartas exclusivas de Pikachu, Eevee e outros amigos que marcaram as jornadas de Ash. Inclui 4 boosters e itens colecionáveis.',
    categoria: 'Pack',
    localEnvio: 'Rio de Janeiro, RJ',
    estoque: 25
  },
  {
    id: '03',
    nome: 'Booster Rivais Predestinados',
    preco: 'R$ 69,90',
    image: require(''),
    descricao: 'Booster Pack da coleção Rivais Predestinados, focado em batalhas épicas entre os rivais clássicos de Pokémon. Com cartas raras de Pokémon como Greninja, Incineroar e mais.',
    categoria: 'Booster',
    localEnvio: 'Belo Horizonte, MG',
    estoque: 40
  },
  {
    id: '04',
    nome: 'Coleção Evoluções Prismaticas - Ed. Especial',
    preco: 'R$ 179,90',
    image: require(''),
    descricao: 'Coleção especial Evoluções Prismáticas com cartas holográficas e itens exclusivos, incluindo uma carta rara de Charizard Prismático. A edição limitada é ideal para os grandes colecionadores.',
    categoria: 'Pack',
    localEnvio: 'Curitiba, PR',
    estoque: 12
  },
  {
    id: '05',
    nome: 'Booster Pack Amigos de Jornada',
    preco: 'R$ 54,90',
    image: require(''),
    descricao: 'Booster Pack de Amigos de Jornada, trazendo 10 cartas que destacam as amizades mais queridas do universo Pokémon, incluindo a rara carta de Eevee.',
    categoria: 'Booster',
    localEnvio: 'Porto Alegre, RS',
    estoque: 28
  },
  {
    id: '06',
    nome: 'Box Rivais Predestinados - Ed. Limitada',
    preco: 'R$ 159,90',
    image: require(''),
    descricao: 'Pack Limitado de Rivais Predestinados com cartas de batalha entre os grandes rivais como Ash e Gary. Inclui uma carta holográfica especial.',
    categoria: 'Pack',
    localEnvio: 'Recife, PE',
    estoque: 15
  },
  {
    id: '07',
    nome: 'Box Evoluções Prismáticas - Edição Premium',
    preco: 'R$ 159,90',
    image: require(''),
    descricao: 'Edição Premium do Booster Evoluções Prismaticas, com uma seleção de cartas raras e holográficas, incluindo Pokémon como Rayquaza e Mewtwo.',
    categoria: 'Pack',
    localEnvio: 'Fortaleza, CE',
    estoque: 20
  },
  {
    id: '08',
    nome: 'Pack Amigos de Jornada - Edição Americana',
    preco: 'R$ 89,90',
    image: require(''),
    descricao: 'Pack especial com cartas dos Pokémon de Kanto, incluindo Pikachu, Bulbasaur, Charmander e Squirtle. Inclui 5 boosters e itens colecionáveis exclusivos.',
    categoria: 'Pack',
    localEnvio: 'Salvador, BA',
    estoque: 18
  },
  {
    id: '09',
    nome: 'Booster Rivais Predestinados - Edição Americana',
    preco: 'R$ 16,90',
    image: require(''),
    descricao: 'Booster Pack focado nas batalhas de rivais entre grandes treinadores como Ash e Paul, com cartas poderosas e ataques decisivos.',
    categoria: 'Booster',
    localEnvio: 'São Paulo, SP',
    estoque: 45
  },
  {
    id: '10',
    nome: 'Elite Trainer Box - Rivais Predestinados',
    preco: 'R$ 169,90',
    image: require(''),
    descricao: 'Coleção de Rivais Predestinados com cartas exclusivas dos confrontos mais épicos entre Pokémon, incluindo uma carta holográfica especial de Greninja.',
    categoria: 'Pack',
    localEnvio: 'Vitória, ES',
    estoque: 14
  },
  {
    id: '11',
    nome: 'Evoluções Prismáticas booster japones',
    preco: 'R$ 49,90',
    image: require(''),
    descricao: 'Booster Pack com cartas exclusivas de Pokémon lendários, com habilidades especiais para batalhas épicas.',
    categoria: 'Booster',
    localEnvio: 'Goiânia, GO',
    estoque: 30
  },
  {
    id: '12',
    nome: 'Pack Amigos de Jornada - Amigos de Jornada',
    preco: 'R$ 39,90',
    image: require(''),
    descricao: 'Pack especial com cartas dos Pokémon, incluindo o adorável Chimchar e o poderoso Infernape. Ideal para quem quer reviver as batalhas da região de Sinnoh.',
    categoria: 'Pack',
    localEnvio: 'Manaus, AM',
    estoque: 22
  },
  {
    id: '13',
    nome: 'Booster Rivais Predestinados ',
    preco: 'R$ 9,90',
    image: require(''),
    descricao: 'Booster com cartas especiais da rivalidade entre grandes treinadores, incluindo cartas de Pokémon poderosos. Cada booster contém 6 cartas.',
    categoria: 'Booster',
    localEnvio: 'Salvador, BA',
    estoque: 50
  },
  {
    id: '14',
    nome: 'Elite Trainer Box - Evoluções Prismáticas',
    preco: 'R$ 379,90',
    image: require(''),
    descricao: 'Coleção exclusiva de Evoluções Prismáticas com foco em Pokémon lendários. Inclui 20 boosters, cartas holográficas, acessórios exclusivos e uma caixa colecionável.',
    categoria: 'ETB',
    localEnvio: 'Florianópolis, SC',
    estoque: 8
  },
  {
    id: '15',
    nome: 'Pack Rivais Predestinados',
    preco: 'R$ 49,90',
    image: require(''),
    descricao: 'Pack de Rivais Predestinados com cartas de batalhas clássicas entre os grandes rivais de Pokémon, incluindo uma carta holográfica rara.',
    categoria: 'Pack',
    localEnvio: 'São Luís, MA',
    estoque: 60
  },
  {
    id: '16',
    nome: 'Booster Evoluções Prismáticas',
    preco: 'R$ 9,90',
    image: require(''),
    descricao: 'Booster Pack com cartas de Pokémon lendários e suas evoluções mais poderosas, incluindo cartas holográficas raras.',
    categoria: 'Booster',
    localEnvio: 'Aracaju, SE',
    estoque: 33
  }
];

export default DATA;
