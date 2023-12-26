import { useCatImg } from './hooks/useCatImg'
import { useCatFact } from './hooks/useCatFact'

export default function App() {

	const {fact, refreshFact} = useCatFact()//get the fact and its refresh function
	const {imgUrl} = useCatImg({ fact })//sends the fact

	const handleclick = async () => {
		refreshFact()//refresh the fact
	}

	return (
		<main>
			<h1>App de gatos</h1>

			<button onClick={handleclick}>Get new Fact</button>
			{fact && <p>{fact}</p>}
			{imgUrl && <img src={imgUrl} alt={"Image extracted from cat api"} />}
		</main>
  )
}
