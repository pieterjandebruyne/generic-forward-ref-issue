import React, {useRef} from 'react';
import GenericForwardedRefComponent from "./GenericForwardRefComponent";
import ProductRow from "./ProductRow";
import {Product} from "./Interfaces";

function App() {
    const divRef = useRef<HTMLDivElement>(null);

    return (
    <div className="App">
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
