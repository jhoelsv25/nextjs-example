import { CartCounter } from "@/app/shopping-cart/components/CartCounter";
import { Pokemon } from "@/app/types/pokemon";
import { PokemonCard } from "@/app/components/pokemon-card/PokemonCard";

const getPokemons = async (limit: number) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`, {
        cache: 'no-store'
    });
    const data = await res.json();
    return data.results.map((pokemon: { name: string; url: string }) => {
        return {
            id: pokemon.url.split('/').at(-2),
            name: pokemon.name,
            url: pokemon.url
        };
    });
}
export default async function PokemonPage() {
    const pokemons: Pokemon[] = await getPokemons(50);
    return (
        <div className="p-6 min-h-screen h-screen flex flex-col justify-center items-center overflow-auto">
            <h1>Pokemon</h1>
            <strong>Manage your Pokemon effectively</strong>
            <main>
                <ul className="flex flex-wrap gap-4 mt-6">
                    {pokemons.map((pokemon) => (
                        <li key={pokemon.id}>
                            <PokemonCard pokemon={pokemon} />
                        </li>
                    ))}
                </ul>
            </main>
            <CartCounter />
        </div>
    );
}
