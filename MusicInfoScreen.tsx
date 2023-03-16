import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

interface MusicData {
  id: number;
  albumCover: string;
  title: string;
  artist: string;
  album: string;
}

interface MusicInfoProps {
  musicData: MusicData;
}

const MusicInfo: React.FC<MusicInfoProps> = ({musicData}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <View style={styles.container}>
      <View style={styles.musicInfoContainer}>
        <Image style={styles.albumCover} source={{uri: musicData.albumCover}} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{musicData.title}</Text>
          <Text style={styles.artist}>{musicData.artist}</Text>
          <Text style={styles.album}>{musicData.album}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={toggleFavorite} style={styles.favoriteButton}>
        <Text style={[styles.heartIcon, isFavorite ? styles.filledHeart : styles.emptyHeart]}>
          {isFavorite ? '❤️' : '♡'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  musicInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  albumCover: {
    width: 100,
    height: 100,
  },
  textContainer: {
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  artist: {
    fontSize: 14,
    marginTop: 5,
  },
  album: {
    fontSize: 12,
    fontStyle: 'italic',
    marginTop: 5,
  },
  favoriteButton: {
    padding: 10,
  },
  heartIcon: {
    fontSize: 24,
  },
  filledHeart: {
    color: 'red',
  },
  emptyHeart: {
    color: 'black',
  },
});

export default MusicInfo;
