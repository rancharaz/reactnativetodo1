import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'


const Tasks = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
            </View>
            <Text style={styles.ItemText}>{props.text}</Text>
            <View style={styles.circular}></View>
        </View>

    )
}

const styles = StyleSheet.create({

    item: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',

    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: "blue",
        borderRadius: 5,
        opacity: 0.5,
        marginRight: 15,
    },
    ItemText: {
        maxWidth: '80%',

    },
    circular: {
        width: 12,
        height: 12,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "blue",
    },


})




export default Tasks