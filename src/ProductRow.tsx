import React from "react";
import {
    ComponentToRenderPropsWithReference,
    Product
} from "./Interfaces";

const ProductRow = ({
    value,
    reference
}: ComponentToRenderPropsWithReference<Product>): JSX.Element => (
    <div ref={reference}>
        id: {value.id}  / name: {value.name}
    </div>
);

export default ProductRow
