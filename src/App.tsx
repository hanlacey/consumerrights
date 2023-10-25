import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import LandingSection from './Sections/LandingSection';
import ContactSection from './Sections/ContactSection';


function App(): JSX.Element {
  const scrollViewRef = React.createRef<ScrollView>();

  const handleScroll = () => {
    // Scroll to bottom of screen-sized section
    const yOffset = Dimensions.get('window').height;
    scrollViewRef.current?.scrollTo({ y: yOffset, animated: true });
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.background} ref={scrollViewRef}>
        <LandingSection onButtonPress={handleScroll} />
        <ContactSection />
      </ScrollView>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  background: {
    height: '100%',
  },
});

export default App;
