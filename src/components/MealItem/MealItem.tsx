import React, { FC } from "react";
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/Ionicons';
import { Meal } from "../../types";
import useFoodStorage from "../../hooks/useFoodStorage";
import { Alert } from "react-native";



const MealItem: FC<Meal> = ({ calorias, nombre, gramos }) => {
    const { onSaveTodayFood } = useFoodStorage();

    const handleAddItemPress = async () => {
        try {
            await onSaveTodayFood({
                nombre,
                calorias,
                gramos
            });
            Alert.alert(`"${nombre}" se añadio correctamente con ${calorias}Kcal y ${gramos}gr.`);
        } catch (error) {
            console.error(error);
            Alert.alert("Comida del día no agregada. Por favor, inténtalo de nuevo.");
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Text style={styles.nombre}>{nombre}</Text>
                <Text style={styles.gramos}>{gramos}gr</Text>
            </View>
            <View style={styles.rightContainer}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.calorias}>{calorias} Kcal</Text>
                    <Button icon={<Icon name="add-circle-outline" size={30} />}
                        type="clear"
                        onPress={handleAddItemPress}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ebd6ff',
        borderRadius: 12,
        padding: 15,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    rightContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nombre: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    gramos: {
        fontSize: 15,
        color: '#808080',
        fontWeight: 'bold',
    },
    calorias: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default MealItem;