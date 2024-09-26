
import { Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import theme from 'src/theme';
import { ThemeProvider } from 'styled-components/native';

export default function App() {
  const [fontsLoaded] = useFonts({Inter_400Regular, Inter_700Bold});
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        {
          fontsLoaded &&
          <>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
          </>
        }
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
