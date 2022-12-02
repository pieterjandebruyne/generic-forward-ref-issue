import React, {useRef} from 'react';
import GenericForwardedRefComponent from "./GenericForwardRefComponent";
import ProductRow from "./ProductRow";
import {
    Product,
    ProductCategory
} from "./Interfaces";
import ProductCategoryRow from "./ProductCategoryRow";

function App() {
    const divRef = useRef<HTMLDivElement>(null);

    return (
    <div className="App">

        <GenericForwardedRefComponent<ProductCategory>
            reference={divRef}
            dragOverlay={false}
            renderItem={ProductCategoryRow}
            value={
                {
                    id: 'a',
                    test: 'test'
                }
            }
        />

        <GenericForwardedRefComponent<Product>
            reference={divRef}
            dragOverlay={false}
            renderItem={ProductRow}
            value={
                {
                    id: 'a',
                    name: 'Foo'
                }
            }
        />

    </div>
  );
}

export default App;
