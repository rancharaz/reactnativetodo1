import React, { useState } from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import Tasks from './Tasks'



const App = () => {

    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([])


    const handleAddTask = () => {
        Keyboard.dismiss();
        setTaskItems([...taskItems, task])
        setTask(null)
    }

    const completeTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy)
    }

    return (
        <View style={styles.container}>
            <View style={styles.viewWrapper}>
                <Text style={styles.titleWrapper}>
                    Your tasks
                </Text>
                <View style={styles.tasks}>
                    {
                        taskItems.map((task, index) => {
                            return (
                                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                                    <Tasks text={task} />
                                </TouchableOpacity>
                            )

                        })
                    }

                </View>

            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "undefined"}
                style={styles.writeTaskWrapper} >

                <TextInput style={styles.input} placeholder={"Write your task"} value={task} onChangeText={text => setTask(text)} />
                <TouchableOpacity onPress={() => handleAddTask()}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}> + </Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cecece',
    },
    viewWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20
    },
    titleWrapper: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    tasks: {
        marginTop: 30
    },
    writeTaskWrapper: {
        position: "absolute",
        bottom: 60,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    input: {
        paddingVertical: 15,
        maxWidth: 250,
        paddingHorizontal: 15,
        backgroundColor: "#FEFEFE",
        borderRadius: 60,
        borderColor: "#CECECE",
        borderWidth: 1,
        width: 250
    },

    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: "#FEFEFE",
        borderRadius: 60,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#CECECE",
        borderWidth: 1,
    },
    addText: {

    }
})

export default App