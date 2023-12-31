import { useState, useEffect } from "react"
import { getFact } from "../services/facts"

export function useCatFact(){

	const [fact, setFact] = useState()
	const refreshFact = () => {
		getFact().then(data => setFact(data))
	}

	useEffect(refreshFact,[])

	return {fact, refreshFact}

}