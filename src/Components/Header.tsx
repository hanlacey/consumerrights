import React from 'react';
import type { PropsWithChildren } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';


export default function Header(): JSX.Element {
    return (
        <View style={styles.container}>
            <Text>
                Header
            </Text>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
});