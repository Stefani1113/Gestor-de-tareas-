import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const TaskItem = ({ task, onToggleTask, onDeleteTask }) => {
    return (
        <View style={styles.taskCard}>
        <View style={styles.leftRow}>
            <TouchableOpacity 
            style={[styles.checkbox, task.completed && styles.checkboxCompleted]} 
            onPress={() => onToggleTask(task.id)}
            >
            {task.completed && <Text style={styles.checkMark}>✓</Text>}
            </TouchableOpacity>
            
            <Text style={[styles.taskText, task.completed && styles.taskTextCompleted]}>
            {task.text}
            </Text>
        </View>

        <TouchableOpacity style={styles.deleteButton} onPress={() => onDeleteTask(task.id)}>
            <Text style={styles.deleteIcon}>🗑</Text>
        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    taskCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#F1F5F9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 1,
    },
    leftRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingRight: 12,
    },
    checkbox: {
    width: 22,
    height: 22,
    borderWidth: 2,
    borderColor: '#94A3B8',
    borderRadius: 6,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
    },
    checkboxCompleted: {
    borderColor: '#e1e8fc',
    backgroundColor: '#9bb1f6',
    },
    checkMark: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
    },
    taskText: {
    fontSize: 15,
    color: '#334155',
    flex: 1,
    },
    taskTextCompleted: {
    textDecorationLine: 'line-through',
    color: '#94A3B8',
    },
    deleteButton: {
    backgroundColor: '#eb9090',
    width: 32,
    height: 32,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    },
    deleteIcon: {
    color: '#FFFFFF',
    fontSize: 14,
    },
});