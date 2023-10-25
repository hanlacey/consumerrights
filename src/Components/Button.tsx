import React from 'react';
import type { PropsWithChildren } from 'react';
import {
    Dimensions,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

export default function Button({ children, onPress }: PropsWithChildren & { onPress: () => void }): JSX.Element {
    return (
        <TouchableHighlight style={styles.container} onPress={onPress} activeOpacity={0.2}
            underlayColor="#263a3d" >
            {children}
        </TouchableHighlight >
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: "white",
        borderWidth: 2,
        borderRadius: 100,
        width: Dimensions.get('screen').width / 2.5,
        height: 50,
    },
});