"use client";
import Image from 'next/image';
import { Pokemon } from '@/app/types/pokemon';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useState } from 'react';
import Link from 'next/link';
interface Props {
  pokemon: Pokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="p-4 rounded hover:shadow-lg transition duration-200 flex flex-col items-center justify-between shadow-md hover:scale-105 bg-white/5 relative">
      <button
        className="absolute top-2 right-2 text-red-500 text-xl focus:outline-none"
        onClick={() => setFavorite((fav) => !fav)}
        aria-label={favorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
        type="button"
      >
        {favorite ? <FaHeart /> : <FaRegHeart />}
      </button>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        alt={pokemon.name}
        className="w-full h-auto"
        width={150}
        height={150}
      />
      <h2 className="text-lg font-bold capitalize mt-2 mb-2 text-center">{pokemon.name}</h2>
      <Link
        href={`/dashboard/pokemon/${pokemon.name}`}
        className="mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm"
        type="button"
      >
        Más información
      </Link>
    </div>
  );
};
