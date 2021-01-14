import React from 'react';
import { Button, Image, SafeAreaView, StyleSheet, View } from 'react-native';
import { selectVideo } from '../../services';
// import { useOnAppLoad } from '../hooks/useOnAppLoad';
// import { images } from '../images';
// import { colors } from '../styles';

export const Home = () => {

  const onSelectVideo = async () => {
    try {
        const mediaOutput = selectVideo();
        if (!mediaOutput.error && !mediaOutput.cancelled) {
          console.log('11111111')
          console.log(mediaOutput)
            // NavigationService.navigate('Metadata', { media: mediaOutput, challengeId });
        } else if (mediaOutput.error) {
          console.log('222222222222')
          console.log(error)
        }
    } catch (e) {
        console.log(e);
    } finally {
        // setLoading(false);
    }
};

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title={'Camera'}
        color={'#303030'}
        onPress={onSelectVideo}
      />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

});
