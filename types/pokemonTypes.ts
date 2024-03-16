export interface PokemonAbility {
    ability: {
      id: number;
    name: string;
      url: string; // Opcional: puedes incluir la URL de la habilidad si es necesaria
    };
    // Otros campos según sea necesario
  }
  
  export interface Pokemon {
    id: number;
    name: string;
    url: string;
    abilities: PokemonAbility[];
    // Otros campos según sea necesario
  }
  