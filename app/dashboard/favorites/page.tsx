import { FavoritePokemons, PokemonGrid, PokemonResponse, SimplePokemon } from "@/app/pokemons";
// import { cacheTag, revalidateTag } from "next/cache";


export const metadata = {
    title: 'Favoritos',
    description: 'This is the page to show your favorite pokemons',
};

export default async function FavoritesPage() {

    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">Pokemon list <small className="text-blue-500">static</small></span>
            <FavoritePokemons/>
        </div>
    );
}

