import React from 'react';
import {
    ImageBackground,
    StyleSheet,
    Text,
    View
} from 'react-native';
import image from '../assets/dlp-banner.jpg'
import Section from '../Components/Section';
import Button from '../Components/Button'

export default function LandingSection(): JSX.Element {
    return (
        <Section>
            <ImageBackground source={image} resizeMode='cover' style={styles.background}>
                <View style={styles.textContainer}>
                    <Text style={styles.subheader}>We are the</Text>
                    <Text style={styles.title}>Digital Litigation Partners</Text>
                </View>
                <Button><Text style={styles.buttonText}>Learn more</Text></Button>
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
        padding: 40
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