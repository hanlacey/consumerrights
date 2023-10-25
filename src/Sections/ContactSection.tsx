import React from 'react';
import {
    ImageBackground,
    StyleSheet,
    Text,
    View
} from 'react-native';
import image from '../assets/dlp-footer-background.jpg'
import Section from '../Components/Section';

export default function ContactSection(): JSX.Element {
    return (
        <Section>
            <ImageBackground source={image} resizeMode='cover' style={styles.background}>
                <View style={styles.textContainer}>
                    <Text style={styles.subheader}>Get in touch</Text>
                </View>
            </ImageBackground>
        </Section>
    );
}

const styles = StyleSheet.create({
    background:
    {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContainer:
    {
        display: 'flex',
        padding: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    subheader: {
        fontSize: 32,
        textAlign: 'center',
        color: 'white',
        fontFamily: 'PlayfairDisplay-Italic',
        fontWeight: '600',
        marginBottom: 10
    },
    title: {
        fontSize: 50,
        textAlign: 'center',
        color: 'white',
        fontFamily: 'SourceSans3-Roman',
        fontWeight: '600',
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        fontFamily: 'SourceSans3-Roman',
        fontWeight: '600',
    }
})