import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { text } from '../../styles';

/**
 * GreetingCard
 *
 * A simple greeting card component that displays a personalised
 * welcome message for the given user name.
 *
 * Props:
 *  - name  {string}  The name to greet (required)
 *  - message {string} Optional custom message (defaults to a friendly greeting)
 */
function GreetingCard({ name, message }) {
    const greeting = message || `Welcome to Instagram, ${name}! 👋`;

    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Text style={[text.bold, text.large, styles.headerText]}>Hello, {name}!</Text>
            </View>
            <View style={styles.body}>
                <Text style={[text.medium, styles.messageText]}>{greeting}</Text>
            </View>
            <View style={styles.footer}>
                <Text style={[text.small, styles.footerText]}>InstagramClone</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        margin: 16,
        borderWidth: 2,
        borderColor: '#C13584',   // Instagram-inspired gradient purple/pink
        borderRadius: 12,
        backgroundColor: 'white',
        // Shadow – iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        // Shadow – Android
        elevation: 4,
        overflow: 'hidden',
    },
    header: {
        backgroundColor: '#C13584',
        paddingVertical: 14,
        paddingHorizontal: 16,
        alignItems: 'center',
    },
    headerText: {
        color: 'white',
        fontSize: 22,
    },
    body: {
        paddingVertical: 20,
        paddingHorizontal: 16,
        alignItems: 'center',
    },
    messageText: {
        color: '#333',
        textAlign: 'center',
        lineHeight: 22,
    },
    footer: {
        borderTopWidth: 1,
        borderTopColor: '#f0d0e8',
        paddingVertical: 8,
        paddingHorizontal: 16,
        alignItems: 'flex-end',
        backgroundColor: '#fdf5fb',
    },
    footerText: {
        color: '#C13584',
        fontStyle: 'italic',
    },
});

export default GreetingCard;
