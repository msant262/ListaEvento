
import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/Octicons';
import { Participant } from '../../components/Participant';

import CheckBox, { Checkbox } from "expo-checkbox";

export default function Home() {

  const [participants, setParticipants] = useState<string[]>([]);
  const [participantsName, setParticipantsName] = useState('');
  const [participantsChecked, setParticipantsChecked] = useState<string[]>([]);
  const [isChecked, setChecked] = useState(false);

  
    
  function handleParticipantAdd(){
    if(participants.includes(participantsName)){
        return Alert.alert("Tarefa Já Existente", "Já existe uma tarefa com esse mesmo nome na lista.")
    }

    setParticipants(prevState => [...prevState, participantsName]);
    setParticipantsName('');
    console.log(participants.length);
    console.log(isChecked);
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
      <View style={styles.textAlign}>
      <Text style={styles.eventName}>
        to<Text style={styles.eventName2}>do</Text>
      </Text>
      </View>
      <View style={styles.form}>
          <TextInput 
            style={styles.input}
            placeholder='Adicione uma nova tarefa'
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

      <View style={styles.form2}>
        <Text style={styles.textCriada}>
          Criadas {participants.length}
        </Text>
        <Text style={styles.textConcluida}>
          Concluidas {participantsChecked.length}
        </Text>
      </View>
        <View>
          <Text style={[{color: '#333333'}]}>
            ________________________________________________________
          </Text>
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
          <View style={styles.textsCenter}>
          <Icon 
            name="checklist"
            size={80}
            color="#808080"     
          />

          <Text style={styles.listEmptyText}>
            Você ainda não tem tarefas cadastradas
          </Text>          
          
          <Text style={styles.listEmptyText2}>
            Crie tarefas e organize seus itens a fazer
          </Text>
          </View>
        )}
      />
    </View>
  );
}