import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import StarEmpty from "../evaluacion/StartEmpty";
import StarSemifull from "../evaluacion/StartHalf";
import StarFilled from "../evaluacion/StartFilled";

export type EvalProps = {
    calificacion: number;
    onCalificacionChange: any;
};

export type StarProp = {
    posicion: number;
    onClick: any;
};

const Evaluacion = (props: EvalProps) => {
    const [filledStars, setFilledStars] = useState<number[]>(Array(5).fill(0));

    const handleOnClick = (position: number) => {
        const newFilledStars = [...filledStars];
        newFilledStars[position - 1] = (newFilledStars[position - 1] + 1) % 3;
        setFilledStars(newFilledStars);
        const newCalificacion = newFilledStars.reduce((acc, cur) => acc + (cur / 2), 0);
        props.onCalificacionChange(newCalificacion);
    };

    return (
        <View style={styles.contenedor}>
            {[1, 2, 3, 4, 5].map((posicion) => (
                <React.Fragment key={posicion}>
                    {filledStars[posicion - 1] === 0 && <StarEmpty onClick={() => handleOnClick(posicion)} posicion={posicion} />}
                    {filledStars[posicion - 1] === 1 && <StarSemifull onClick={() => handleOnClick(posicion)} posicion={posicion} />}
                    {filledStars[posicion - 1] === 2 && <StarFilled onClick={() => handleOnClick(posicion)} posicion={posicion} />}
                </React.Fragment>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    contenedor: {
        display: 'flex',
        flexDirection: 'row',
    },
});

export default Evaluacion;