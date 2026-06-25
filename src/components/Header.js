import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Usamos una función de flecha y exportación nombrada directa
export const Header = () => {
    return (
        <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Gestor de Tareas </Text>
        </View>
    );
    };

// Estilos nativos del componente
const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#E2E8F0',
        backgroundColor: '#FFFFFF',
    },
    headerText: {
        fontSize: 25,
        fontWeight: '700',
        color: '#ca6cfd',
    },
    });