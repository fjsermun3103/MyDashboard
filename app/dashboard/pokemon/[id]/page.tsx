import { Pokemon } from "@/app/pokemons";
import { Metadata } from "next";

interface Props {
    params: { id: string };
};

export async function generateMetadata({params}: Props): Promise<Metadata> {
    const { id:pokemonId } = await params;
    const {id, name} = await getPokemon(pokemonId);
    return {
        title: `#${id} - ${ name }`,
        description: `${id} pokemon page`
    }
}

const getPokemon = async (id: string): Promise<Pokemon> => {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
        cache: 'force-cache' // TODO: Cambiar en el futuro
    }).then(resp => resp.json());

    console.log('Se cargó', pokemon.name)

    return pokemon;
};

export default async function PokemonPage({ params }: Props) {
    const { id } = await params;
    const pokemon = await getPokemon(id);

    return (
        <div>
            <h1>Pokemon {id}</h1>
            <div>
                {JSON.stringify(pokemon)}
            </div>
        </div>
    );
};