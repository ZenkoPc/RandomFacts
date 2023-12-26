import { useState, useEffect } from "react"
const catUrl = 'https://cataas.com'

export function useCatImg({ fact }) {
	
	const [img, setImg] = useState()

	useEffect(() => {
		if(!fact) return
		const first = fact.split(' ',3)

		fetch(`https://cataas.com/cat/says/${first[0]}?size=50&color=red&json=true`)
			.then(res => res.json())
			.then(data => setImg(data.url))
	},[fact])
	console.log(img)
	return { imgUrl: `${catUrl}${img}` }

}