import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Index, { getStaticProps } from '../pages/index'

describe('Index', () => {
	describe('Component', () => {
		it('se renderiza', () => {
			render(
				<Index
					pokemones={[{ name: 'Chanchito feliz', url: '/pokemon/detalle/1' }]}
				/>
			)

			const paragraph = screen.getByText('Mi APP de Pokemones')
			expect(paragraph).toBeInTheDocument()

			const chanchito = screen.getByText('Chanchito feliz')
			const url = chanchito.getAttribute('href')
			expect(url).toEqual('/pokemones/1')
		})
	})

	describe('getStaticProps', () => {
		it('return pokemones', async () => {
			global.fetch = jest.fn().mockImplementation((url) => {
				expect(url).toEqual('https://pokeapi.co/api/v2/pokemon?limit=151')
				return new Promise((resolve) => {
					resolve({
						json: () =>
							Promise.resolve({
								results: 'lista de pokemones'
							})
					})
				})
			})
			const { props } = await getStaticProps()
			expect(props.pokemones).toBe('lista de pokemones')
		})
	})
  
})
