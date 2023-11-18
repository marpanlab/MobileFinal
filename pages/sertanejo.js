import React from 'react'
import { View, Text, Image, Slider, StyleSheet, TouchableOpacity } from 'react-native'

const MusicPlayer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.albumArt}
          source={{ uri: 'https://assets.clubefm.com.br/uploads/site/og_image/2/NOTAMUSICAL.png' }}
        />
      </View>
      <View style={styles.sliderContainer}>
        <Text style={styles.startTime}>0:00</Text>
        <Slider style={styles.slider} />
        <Text style={styles.endTime}>4:20</Text>
      </View>
      <View style={styles.songInfo}>
        <Text style={styles.songTitle}>Mix FM</Text>
        <Text style={styles.songArtist}>Tocando Coldlpay</Text>
      </View>
      <View style={styles.controls}>
        <TouchableOpacity>
          <Image
            style={styles.previous}
            source={{ uri: 'https://img.icons8.com/color/70/000000/previous.png' }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.playPause}
            source={{ uri: 'https://img.icons8.com/color/70/000000/pause.png' }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.next}
            source={{ uri: 'https://img.icons8.com/color/70/000000/next.png' }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.final}>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#282828',
  },
  imageContainer: {
    width: '100%',
    height: 300,
  },
  albumArt: {
    width: '100%',
    height: '100%',
  },
  sliderContainer: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
  },
  startTime: {
    fontSize: 18,
    color: 'white',
  },
  slider: {
    width: '80%',
  },
  endTime: {
    fontSize: 18,
    color: 'white',
  },
  songInfo: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
  },
  songTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  songArtist: {
    fontSize: 18,
    color: 'gray',
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '60%',
  },
  previous: {
    width: 36,
    height: 36,
  },
  playPause: {
    width: 48,
    height: 48,
  },
  next: {
    width: 36,
    height: 36,
  },
  final: {
    width: '100%',
    height: '100%',
    backgroundColor: '#282828',
  },
})

export default MusicPlayer