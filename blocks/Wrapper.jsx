import React from "react";

export function Wrapper({ children, total, index }) {
    if (index >= total) {
        return children;
    }

    if (!index) index = 0;

    return (
        <div
            className={`wp-${index}-${Math.round(Math.random() * 99999)}`}
            data-aid={`wrap-${index}-${Math.round(Math.random() * 99999)}`}
            style={{
                border: `0px solid rgb(${Math.round(Math.random() * 250)},${Math.round(
                    Math.random() * 250
                )},${Math.round(Math.random() * 250)})`,
            }}
        >
            {/* <Head></Head> */}
            <Wrapper total={total} index={index + 1}>
                {children}
            </Wrapper>
        </div>
    );
}
