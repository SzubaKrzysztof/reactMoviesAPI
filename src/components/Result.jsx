import React from 'react'

function Result({ result, openPopup }) {
	return (
		<div className="result br3 grow shadow-5 b--white-70 "
			onClick={() => openPopup(result.imdbID)} >
			<img src={
				result.Poster
			}
			/> <h3> {result.Title} </h3>
		</div>
	)
}

export default Result