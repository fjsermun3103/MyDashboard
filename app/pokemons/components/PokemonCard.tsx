"use client"

import Link from "next/link";
import { SimplePokemon } from "../interfaces/simple-pokemon";
import Image from "next/image";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/app/store";
import { toggleFavorite } from "@/app/store/pokemons/pokemonsSlice";
import { useEffect, useState } from "react";

interface Props {
    pokemon: SimplePokemon;
}


export const PokemonCard = ({ pokemon }: Props) => {
    const { id, name } = pokemon;
    const [mounted, setMounted] = useState(false)
    const isFavorite = useAppSelector( state => !!state.pokemons.favorites[id] );

    const dispatch = useAppDispatch();

    const onToggle = () => {
        dispatch( toggleFavorite(pokemon) );
    }
    useEffect(() => {
        setMounted(true)
    }, []);

    const showAsFavorite = mounted ? isFavorite : false;
    return (
        <div className="mx-auto right-0 mt-2 w-60">
            <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
                <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
                    <Image
                        key={pokemon.id}
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/${pokemon.id}.png`}
                        width={120}
                        height={120}
                        alt={pokemon.name}
                        loading="lazy"
                    />
                    <p className="capitalize pt-2 text-lg font-semibold text-gray-50">{name}</p>
                    <div className="mt-5">
                        <Link href={`/dashboard/pokemons/${name}`}
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                        >
                            More info
                        </Link>
                    </div>
                </div>
                <div>
                    <div
                        onClick={onToggle}
                        className="cursor-pointer px-4 py-2 hover:bg-gray-100 flex items-center">
                        <div className="text-red-600">
                            {
                                showAsFavorite
                                ? (<IoHeart />) 
                                : (<IoHeartOutline />)
                            }
                        </div>
                        <div className="pl-3">
                            <p className="text-sm font-medium text-gray-800 leading-none">
                                {
                                    showAsFavorite
                                        ? 'Is favorite'
                                        : 'Is not favorite'
                                }
                            </p>
                            <p className="text-xs text-gray-500">Click to set favorite</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};