import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import api from './services/api'

//Não possuem valor semântico (significado)
//Não possuem estilização própria
//Todos componentes possuem por padrão "display: flex"

//View --> div, footer, header, main, aside, section (container)
//Text --> p, span, strong, h1, h2, h3
//FlatList --> componente performático para listas. Só mostra o que tá visível, o que não está, ela não renderiza

var counter = 0;
export default function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data);
        });
    }, []);

    function handleAddProject() {
        api.post('projects',
            {
                title: `Novo Projeto ${counter++}`,
                owner: 'Rebeca Alves'
            }).then(response => {
                setProjects([...projects, response.data]);
            });
    }

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#7159c1" />

            <SafeAreaView style={styles.container}>
                {/* data - obrigatoriamente tem que ser um array */}
                <FlatList
                    data={projects}
                    keyExtractor={project => project.id}
                    renderItem={({ item: project }) => (
                        <Text style={styles.project}>{project.title}</Text>
                    )}
                />

                <TouchableOpacity 
                onPress={handleAddProject} 
                activeOpacity={0.6} 
                style={styles.button}
                >
                    <Text style={styles.buttonText}> Adicionar projeto </Text>
                </TouchableOpacity>

            </SafeAreaView>
        </>
    );
}

//definindo estilos
//css dentro do JS
const styles = StyleSheet.create({
    //definindo cor do container e tamanho
    container: {
        flex: 1,
        backgroundColor: '#7159c1'
    },

    project: {
        color: '#FFF',
        fontSize: 30
    },

    button: {
        backgroundColor: '#FFF',
        margin: 20,
        height: 50,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'

    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16,

    }
});