import { PokemonGrid, PokemonResponse, SimplePokemon } from "@/app/pokemons";
// import { cacheTag, revalidateTag } from "next/cache";


export const metadata = {
    title: 'Favoritos',
    description: 'This is the page to show your favorite pokemons',
};

export default async function PokemonsPage() {
    // 'use cache';

    // cacheTag('pokemons');
    // cacheLife({
    //     stale: 10,
    //     revalidate: 60,
    // });
    // revalidateTag('pokemons', 'max');

    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">Favorite Pokemon <small className="text-blue-500">Global State</small></span>
            <PokemonGrid pokemons={[]} />
        </div>
    );
}