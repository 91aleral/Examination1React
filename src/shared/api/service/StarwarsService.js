import http from '../StarwarsAPI'

const getStarwarsCharacter = (number) => {
	return http.get(`people/${number}`)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	getStarwarsCharacter
}