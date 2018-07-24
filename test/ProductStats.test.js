import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import { ProductStats } from '../src/components/ProductStats'

describe('ProductStats', () => {

    test('Component init', () => {
        const props = {
            match: {
                params: {
                    id: 'BTC'
                }
            }
        }
        const comp = renderer.create(
            <MemoryRouter>
                <ProductStats {...props} />
            </MemoryRouter>
        )
        expect(comp).toBeTruthy()
    })

})