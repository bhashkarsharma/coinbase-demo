import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import { ProductOverview } from '../src/components/ProductOverview'

describe('ProductOverview', () => {

    test('Component init', () => {
        const comp = renderer.create(
            <MemoryRouter>
                <ProductOverview />
            </MemoryRouter>
        )
        expect(comp).toBeTruthy()
    })
})