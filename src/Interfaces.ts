import {
    ForwardedRef,
    ReactElement
} from "react";

// Base interface - if we want to be able to drag it, it needs to have an id
export interface Draggable {
    id: string
}

// Base interface for a product that has an id and will be draggable
export interface Product extends Draggable {
    name: string
}

export interface ProductCategory extends Draggable {
    test: string
}

export interface GenericComponentToRenderProps<T extends Draggable> {
    value: T,
}

export interface ComponentToRenderPropsWithReference<T extends Draggable> extends GenericComponentToRenderProps<T> {
    reference: ForwardedRef<HTMLDivElement>
}

export interface GenericComponentToRenderProps<T extends Draggable> {
    value: T,
}

// the render function will need all the properties of the generic interface (eg. a Product) in order to render
export type RenderFunctionType<T extends Draggable> = (
    arguments_: GenericComponentToRenderProps<T> & ComponentToRenderPropsWithReference<T>
) => ReactElement<any, any> | null

export interface GenericForwardedRefComponentProps<T extends Draggable> extends GenericComponentToRenderProps<T>{
    renderItem: RenderFunctionType<T>
    dragOverlay: boolean
}
