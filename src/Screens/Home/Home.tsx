import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
import { Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header/Header';

const Home = () => {
  const { navigate } = useNavigation();
  const handleAddCaloriesPress = () => {
    navigate('AddFood');
  };

  return (
    <SafeAreaView>
      <Header />
      <View style={styles.caloriasContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.caloriasText}>Calorías</Text>
        </View>
        <View style={styles.rightContainer}>
          <Button
            icon={<Icon name="add-circle" size={24} color="black" />}
            radius="lg"
            color="#9933FF"
            onPress={handleAddCaloriesPress}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  caloriasContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    marginTop: 120,
  },
  caloriasText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  rightContainer: {
    flex: 0,
    width: 60,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});

export default Home;