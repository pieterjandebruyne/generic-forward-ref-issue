import React from "react";
import {
    ComponentToRenderPropsWithReference,
    Product,
    ProductCategory
} from "./Interfaces";

const ProductCategoryRow = ({
    value,
    reference
}: ComponentToRenderPropsWithReference<ProductCategory>): JSX.Element => (
    <div ref={reference}>
        id: {value.id}  / test: {value.test}
    </div>
);

export default ProductCategoryRow
