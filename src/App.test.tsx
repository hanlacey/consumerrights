import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import App from './App';
import LandingSection from './Sections/LandingSection';
import ContactSection from './Sections/ContactSection';

test('renders landing and contact screens', () => {
    const { getByText } = render(<App />);
    expect(getByText('Digital Litigation Partners')).toBeTruthy();
});

test('button press scrolls to contact screen', () => {
    const onButtonPressMock = jest.fn();
    const { getByText } = render(<LandingSection onButtonPress={onButtonPressMock} />);
    fireEvent.press(getByText('Learn more'));
    expect(onButtonPressMock).toHaveBeenCalledTimes(1);
});

test('input field changes are handled correctly', () => {
    const { getByPlaceholderText } = render(<ContactSection />);
    const nameInput = getByPlaceholderText('Name');
    fireEvent.changeText(nameInput, 'Hannah');
    expect(nameInput.props.value).toBe('Hannah');
});