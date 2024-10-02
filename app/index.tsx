
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';

const coordinate = {
  latitude: -5.110935631944277,
  longitude: -42.853910905334054,
};

const App = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={StyleSheet.absoluteFill}
        initialRegion={{
          latitude: coordinate.latitude,
          longitude: coordinate.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        <Marker coordinate={coordinate}>
          <Callout>
            <View style={styles.callout}>
              <Text style={styles.title}>IFMA Timon</Text>
              <Text style={styles.street}>Av. Luis Firmino de Sousa</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  callout: {
    padding: 12,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  street: {
    fontSize: 14,
  },
});

export default App;
