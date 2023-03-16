import React from 'react';
import {SafeAreaView, StyleSheet, FlatList} from 'react-native';
import MusicInfo from './screens/MusicInfoScreen';

interface MusicData {
  id: number;
  albumCover: string;
  title: string;
  artist: string;
  album: string;
}

const App = () => {
  const musicData: MusicData[] = [
    {
      id: 1,
      albumCover: 'https://upload.wikimedia.org/wikipedia/pt/6/6c/Parachutes.jpg',
      title: 'Shiver',
      artist: 'Coldplay',
      album: 'Parachutes',
    },

    {
      id: 2,
      albumCover: 'https://cdn.vox-cdn.com/thumbor/IMLEDz6BpgIx04Ip0KdyIRyHRvk=/0x165:1000x832/1200x800/filters:focal(0x165:1000x832)/cdn.vox-cdn.com/uploads/chorus_image/image/48744089/CUwcWtrWcAE67Q0.0.0.jpg_large',
      title: 'Birds',
      artist: 'Coldplay',
      album: 'A Head Full of Dreams',
    },

    {
      id: 3,
      albumCover: 'https://m.media-amazon.com/images/I/81K6EI2aW0L._AC_SL1426_.jpg',
      title: 'A Sky Full of Stars',
      artist: 'Coldplay',
      album: 'Ghost Stories',
    },

    {
      id: 4,
      albumCover: 'https://m.media-amazon.com/images/I/51GI8F4lyhL._AC_SL1000_.jpg',
      title: 'My Universe',
      artist: 'Coldplay',
      album: 'Music Of The Spheres',
    },

    {
      id: 5,
      albumCover: 'https://upload.wikimedia.org/wikipedia/en/b/b5/ImagineDragonsEvolve.jpg',
      title: 'Thunder',
      artist: 'Imagine Dragons',
      album: 'Evolve',
    },

    {
      id: 7,
      albumCover: 'https://m.media-amazon.com/images/I/61yp8mw1rDL._AC_SY355_.jpg',
      title: 'Demons',
      artist: 'Imagine Dragons',
      album: 'Night Visions',
    },

    {
      id: 8,
      albumCover: 'https://m.media-amazon.com/images/I/61yp8mw1rDL._AC_SY355_.jpg',
      title: 'Radioactive',
      artist: 'Imagine Dragons',
      album: 'Night Visions',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={musicData}
        renderItem={({item}) => <MusicInfo musicData={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
