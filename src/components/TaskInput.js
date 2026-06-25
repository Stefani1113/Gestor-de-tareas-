import React, { useState } from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';

export const TaskInput = ({ onAddTask }) => {
    const [text, setText] = useState('');

    const handlePress = () => {
        if (text.trim().length === 0) {
        alert('Por favor, escriba una descripción válida para la tarea.');
        return;
        }

        onAddTask(text);
        setText('');
    };

    return (
        <View style={styles.inputCard}>
        <TextInput
            style={styles.input}
            placeholder="Ingrese una descripción..."
            placeholderTextColor="#94A3B8"
            value={text}
            onChangeText={setText}
            multiline
        />

        <TouchableOpacity
            style={styles.button}
            onPress={handlePress}
            activeOpacity={0.8}
        >
            <Text style={styles.buttonText}>+ Añadir</Text>
        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    inputCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    shadowColor: '#f200ff',
    shadowOffset: {
    width: 0,
    height: 2
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2
    },

    input: {
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#334155',
    textAlignVertical: 'top',
    minHeight: 60,
    marginBottom: 12
    },

    button: {
    backgroundColor: '#ca6cfd',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center'
    },

    buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600'
    }
});