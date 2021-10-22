import { useState, useEffect } from "react";
import axios from "axios";
import Pokemon from "./components/Pokemon";
import "./index.css";

const App = () => {
	const [pokemons, setPokemons] = useState([]);
	const [loading, setLoading] = useState(false);
	const [next, setNext] = useState("");
	const [prev, setPrev] = useState("");
	const [error, setError] = useState("");

	useEffect(() => {
		const getData = async () => {
			try {
				setLoading(true);
				const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
				setPokemons(data.results);
				setNext(data.next);
				setPrev(data.previous);
				setLoading(false);
			} catch (err) {
				setError(err.message);
				setLoading(false);
			}
		};
		getData();
	}, []);

	const getNext = async () => {
		try {
			setLoading(true);
			const { data } = await axios.get(next);
			setPokemons(data.results);
			setNext(data.next);
			setPrev(data.previous);
			setLoading(false);
		} catch (err) {
			console.log(err);
		}
	};

	const getPrev = async () => {
		if (prev !== null) {
			try {
				setLoading(true);
				const { data } = await axios.get(prev);

				setPokemons(data.results);
				setNext(data.next);
				setPrev(data.previous);
				setLoading(false);
			} catch (err) {
				console.log(err);
			}
		}
	};

	return (
		<>
			{loading ? (
				<h2>Loading...</h2>
			) : error ? (
				<h2>
					<strong>{error}</strong>
				</h2>
			) : (
				<>
					<div className="bg-gray-900">
						{prev && (
							<button
								onClick={getPrev}
								className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4"
							>
								Previous
							</button>
						)}
						<button
							onClick={getNext}
							className=" justify-items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4"
						>
							Next
						</button>
					</div>
					<Pokemon pokemons={pokemons} />
				</>
			)}
		</>
	);
};

export default App;
