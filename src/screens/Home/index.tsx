
import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

export default function Home() {

  const [participants, setParticipants] = useState<string[]>([]);
  const [participantsName, setParticipantsName] = useState('');

  function handleParticipantAdd(){
    if(participants.includes(participantsName)){
        return Alert.alert("Participante existente", "Já existe participante na lista com esse nome.")
    }

    setParticipants(prevState => [...prevState, participantsName]);
    setParticipantsName('');
 
  }

  function handleParticipanRemove(name: string){
   
    Alert.alert(`Remover participante?`, `Deseja realmente excluir ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setParticipants(prevState => prevState.filter(participants => participants !== name))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
    
    console.log(`Você deletou ${name}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        CyberSec
      </Text>

      <Text style={styles.eventDate}>
        Quarta, 20 de junho de 2024.
      </Text>

      <View style={styles.form}>
          <TextInput 
            style={styles.input}
            placeholder='Nome do Participante'
            placeholderTextColor='#6b6b6b'
            onChangeText={setParticipantsName}
            value={participantsName}
          />

          <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
            <Text style={styles.buttonText}>
              +
            </Text>
          </TouchableOpacity>
      </View>

      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({item}) => (
          
          <Participant 
          key={item}
          name={item} 
          onRemove={() => handleParticipanRemove(item)}
          
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguem chegou ainda? Adicione os convidados
          </Text>
        )}
      />
    </View>
  );
}