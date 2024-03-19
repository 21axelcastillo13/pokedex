export interface PokemonAbility {
    ability: {
      id: number;
      name: string;
      url: string;
    };
  }
  
  export interface Pokemon {
    id: number;
    name: string;
    url: string;
    abilities: PokemonAbility[];
  }
  