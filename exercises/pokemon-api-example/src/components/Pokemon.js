const Pokemon = ({ pokemons }) => {
	return (
		<div className="mx-auto grid grid-cols-5 m-4 object-contain border-4 border-light-blue-500 border-opacity-50">
			{pokemons.map((pokemon, id) => (
				<div
					className="flex flex-col border-2 border-light-gray-500  border-opacity-50"
					key={id}
				>
					<img
						className="w-48 h-48 md:w-auto m-5"
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
							pokemon.url.split("/")[pokemon.url.split("/").length - 2]
						}.svg`}
						alt={pokemon.name}
					/>

					<h6 className="card-title m-5 text-center">
						<strong className="text-primary">
							{pokemon.name.toUpperCase()}
						</strong>
					</h6>
				</div>
			))}
		</div>
	);
};

export default Pokemon;
