import React, { useContext } from 'react';
import { Text, StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import { Context as TrackContext } from '../context/TrackContext';
import Spacer from '../components/Spacer';

const TrackDetailScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);
  const _id = navigation.getParam('_id');

  const track = state.find(t => t._id === _id );
  const initialCoords = track.locations[0].coords;

  return <>
    <Spacer />
    <Text style={{ fontSize: 30, alignSelf: 'center' }}>{track.name}</Text>
    <Spacer />
    <Spacer>
      <MapView
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords
        }}
        style={styles.map}
      >
        <Polyline 
          coordinates={track.locations.map(loc => loc.coords)}

        />
      </MapView>
    </Spacer>
  </>
};
 
const styles = StyleSheet.create({
  map: {
    height: 300
  }
});
 
export default TrackDetailScreen;
