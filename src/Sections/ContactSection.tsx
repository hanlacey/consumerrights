import React, { useState } from 'react';
import {
    Dimensions,
    ImageBackground,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import Section from '../Components/Section';
import image from '../assets/dlp-footer-background.jpg'


export default function ContactSection(): JSX.Element {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [message, setMessage] = useState<string>('');


    const handleNameChange = (text: string) => {
        setName(text);
    };

    const handleEmailChange = (text: string) => {
        setEmail(text);
    };

    const handlePhoneChange = (text: string) => {
        setPhone(text);
    };

    const handleMessageChange = (text: string) => {
        setMessage(text);
    };

    const onPress = () => {
        console.log({ name, email, phone, message })
    }

    return (
        <Section>
            <ImageBackground source={image} resizeMode='cover' style={styles.background}>
                <Text style={styles.subheader}>Enquire online</Text>
                <View style={styles.inputContainer}>
                    <View>
                        <TextInput style={styles.inputField} placeholder='Name' value={name} onChangeText={handleNameChange} />
                        <TextInput style={styles.inputField} placeholder='Email address' value={email} onChangeText={handleEmailChange}></TextInput>
                        <TextInput style={styles.inputField} placeholder='Phone number' value={phone} onChangeText={handlePhoneChange}></TextInput>
                    </View>
                    <TextInput style={styles.messageInputField} multiline={true} placeholder='Message' value={message} onChangeText={handleMessageChange}></TextInput>
                    <TouchableOpacity style={styles.button} onPress={onPress}>
                        <Text style={styles.buttonText}>Send Message*</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.termsText}>*By pressing send you consent to Digital Litigation Partners collecting your submitted information in order to respond to your enquiry. For more information view our Privacy Policy</Text>
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
    subheader: {
        fontSize: 32,
        textAlign: 'center',
        color: 'white',
        fontFamily: 'PlayfairDisplay-Italic',
        fontWeight: '600',
        marginBottom: 10
    },
    inputContainer:
    {
        display: 'flex',
        padding: 40,
        alignItems: 'center',
    },
    inputField: {
        width: Dimensions.get('screen').width - 50,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        marginVertical: 2,
        opacity: 0.8
    },
    messageInputField: {
        display: 'flex',
        backgroundColor: 'white',
        borderRadius: 5,
        height: 200,
        width: Dimensions.get('screen').width - 50,
        marginTop: 2,
        opacity: 0.8,
        padding: 10,
        paddingTop: 15,
        textAlignVertical: 'top'
    },
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderRadius: 100,
        borderColor: 'white',
        marginTop: 20,
        width: Dimensions.get('screen').width - 50,
        height: 50
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        fontFamily: 'SourceSans3-Roman',
        fontWeight: '500',
        textAlign: 'center'
    },
    termsText: {
        color: 'white',
        opacity: 0.5,
        fontFamily: 'SourceSans3-Roman',
        textAlign: 'center'
    }
})