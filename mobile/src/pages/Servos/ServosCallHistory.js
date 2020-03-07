import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, TextInput } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion'
import { MaterialIcons } from '@expo/vector-icons'

function ServosCallHistory({ navigation }) {
    const [activeSections, setActiveSections] = useState([]);

    var arrayDays = [
        {
            day: "04/02/2020",
            schedule: [
                "07:00 - Ver marcações",
                "07:06 - Ver marcações",
                "09:02 - Ver marcações (total)",
            ],
        },
        {
            day: "06/02/2020",
            schedule: [
                "07:00 - Ver marcações",
                "07:06 - Ver marcações",
                "09:02 - Ver marcações (total)",
            ],
        },
        {
            day: "11/02/2020",
            schedule: [
                "07:00 - Ver marcações",
                "07:06 - Ver marcações",
                "09:02 - Ver marcações (total)",
            ],
        },
        {
            day: "13/02/2020",
            schedule: [
                "07:00 - Ver marcações",
                "07:06 - Ver marcações",
                "09:02 - Ver marcações (total)",
            ],
        },
        {
            day: "19/02/2020",
            schedule: [
                "07:00 - Ver marcações",
                "07:06 - Ver marcações",
                "09:02 - Ver marcações (total)",
            ],
        },
    ];

    function renderHeader(section, index, isActive) {
        return (
            <View style={styles.headerAccordion}>
                <MaterialIcons
                    name={isActive ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                    size={45}
                    color="#fff"
                />
                <Text style={styles.textHeaderAccordion}>{section.day}</Text>
            </View>
        );
    }

    function renderContent(section) {
        return (
            <View style={styles.contentAccordion}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('ServosCallHistoryDetail', { 
                            date: section.day,
                            schedule: section.schedule[0]
                        });
                    }}
                >
                    <Text style={styles.textContentAccordion}>{section.schedule[0]}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('ServosCallHistoryDetail', { 
                            date: section.day,
                            schedule: section.schedule[1]
                        });
                    }}
                >
                    <Text style={styles.textContentAccordion}>{section.schedule[1]}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('ServosCallHistoryDetail', { 
                            date: section.day,
                            schedule: section.schedule[2]
                        });
                    }}
                >
                    <Text style={styles.textContentAccordion}>{section.schedule[2]}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    function updateSections(sections) {
        setActiveSections(sections.includes(undefined) ? [] : sections);
    }

    return (
        <View style={styles.container}>

            <View style={styles.containerSearchDay}>
                <View style={styles.container2SearchDay}>
                <TextInput
                    style={styles.searchDay}
                    placeholder="Pesquisar dia..."
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    autoCorrect={false}
                />
                </View>
            </View>

            <ScrollView style={styles.scrollView}>
                <Accordion
                    sections={arrayDays}
                    activeSections={activeSections}
                    renderHeader={renderHeader}
                    renderContent={renderContent}
                    onChange={updateSections}
                    expandMultiple={true}
                    touchableComponent={TouchableOpacity}
                />
            </ScrollView>

            <View style={styles.containerBottom}>
                <TouchableOpacity
                    onPress={() => {}}
                    style={styles.buttonCallReset}
                >
                    <Text style={styles.textButtonCallReset}>Resetar Chamadas</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#141932",
        flex: 1
    },

    //Pesquisar dia
    containerSearchDay: {
        marginTop: 20,
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    container2SearchDay: {
        backgroundColor: "#fff",
        borderRadius: 10,
    },
    searchDay: {
        backgroundColor: "#fff",
        height: 40,
        borderRadius: 25,
        fontSize: 16,
        marginLeft: 20,
    },

    //Lista dias
    scrollView: {
        // marginBottom: 10,
    },
    headerAccordion: {
        backgroundColor: '#141932',
        padding: 10,
        flexDirection: 'row',
    },
    textHeaderAccordion: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#fff",
        textAlign: 'left',
    },
    contentAccordion: {
        backgroundColor: '#141932',
        marginLeft: 30,
    },
    textContentAccordion: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
        textAlign: 'left',
    },

    //Parte inferior
    containerBottom: {
        padding: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonCallReset: {
        backgroundColor: "#3e56e8",
        width: 250,
        height: 70,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButtonCallReset: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#FFF",
    },

});

export default ServosCallHistory;