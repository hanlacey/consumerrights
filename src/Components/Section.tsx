import React from 'react';
import type { PropsWithChildren } from 'react';
import {
    StyleSheet,
    View,
    Dimensions
} from 'react-native';

export default function Section({ children }: PropsWithChildren): JSX.Element {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
});