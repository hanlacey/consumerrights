import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import LandingSection from './Sections/LandingSection';


function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView style={styles.background}>
        <View
          style={{
            backgroundColor: 'white'
          }}>
          <LandingSection />
        </View>
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
