import React, {
    ForwardedRef,
    forwardRef,
    useEffect
} from "react";
import {
    Draggable,
    GenericForwardedRefComponentProps
} from "./Interfaces";



const GenericForwardedRefComponent = forwardRef(
    <T extends Draggable>(
        {
            dragOverlay,
            renderItem,
            value
        }: GenericForwardedRefComponentProps<T>,
        reference: ForwardedRef<HTMLDivElement>
    ) => {
        useEffect(() => {
            if (dragOverlay !== true) {
                return
            }
            document.body.style.cursor = 'grabbing'
            // eslint-disable-next-line consistent-return
            return () => {
                document.body.style.cursor = ''
            }
        }, [dragOverlay])

        return renderItem({
            value,
            reference
        })
    }
)

export default GenericForwardedRefComponent as <T extends Draggable>(props: GenericForwardedRefComponentProps<T> & { reference: ForwardedRef<HTMLDivElement> }) => JSX.Element;
