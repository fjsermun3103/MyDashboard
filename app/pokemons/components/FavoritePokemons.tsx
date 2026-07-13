"use client"

import { useAppSelector } from "@/app/store";
import { PokemonGrid } from "./PokemonGrid"
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { IoHeartOutline } from "react-icons/io5";

export const FavoritePokemons = () => {

    const [mounted, setMounted] = useState(false);
    const favoritePokemons = useAppSelector(state => Object.values(state.pokemons.favorites));
    const [pokemons, setPokemons] = useState(favoritePokemons);

    const pathname = usePathname();

    useEffect(() => {
        setPokemons(favoritePokemons);
        setMounted(true);
    }, [pathname]);

    if (!mounted) {
        
        return (
            <div className="flex flex-col h-[50vh] items-center justify-center">
                <IoHeartOutline size={100} className="text-red-500"/>
                <span>There is no favorite Pokemon</span>
            </div>
        )
    };
    return (
        <PokemonGrid pokemons={pokemons}/>
    );
};