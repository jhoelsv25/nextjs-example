import Image from 'next/image';
import { notFound } from 'next/navigation';

interface Props {
    params: {
        slug: string;
    };
}
const getPokenmon = async (name: string) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
            cache: 'no-store',
            next: { revalidate: 10 },
        });
        const data = await res.json();
        return data;
    } catch (error) {
        notFound();
    }
};
export async function generateStaticParams() {
    const pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`, {
        cache: 'no-store',
    });
    const data = await pokemons.json();
    return data.results.map(({ name }: any) => ({
        slug: name,
    }));
}

//metadata dinamica

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const pokemon = await getPokenmon(slug);
    return {
        title: `Pokemon - ${pokemon.name}`,
        description: `Details and information about ${pokemon.name}, a Pokemon of type ${pokemon.types.map((type: { type: { name: string } }) => type.type.name).join(', ')}.`,
    };
}

export default async function PokemonDetailPage({ params }: Props) {
    const { slug } = await params;
    const pokemon = await getPokenmon(slug);
    return (
        <div className="p-6 min-h-screen h-screen flex flex-col justify-center items-center overflow-auto">
            <h1>Pokemon Detail Page</h1>
            <Image
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                width={200}
                height={200}
            />
            <strong>Details for Pokemon: {pokemon.name}</strong>
        </div>
    );
}
