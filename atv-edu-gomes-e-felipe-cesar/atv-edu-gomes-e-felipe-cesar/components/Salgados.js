import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const salgados = [
  {
    id: '1',
    nome: 'Coxinha de Frango',
    preco: 'R$ 5,00',
    descricao: 'Massa cremosa recheada com frango desfiado.',
    imagem: require('../assets/coxinha.jpg'),
  },
  {
    id: '2',
    nome: 'Empada de Palmito',
    preco: 'R$ 5,50',
    descricao: 'Massa leve com recheio cremoso de palmito.',
    imagem: require('../assets/empadadefrango.webp'),
  },
  {
    id: '3',
    nome: 'Pastel de Carne',
    preco: 'R$ 6,00',
    descricao: 'Massa crocante com queijo derretido.',
    imagem: require('../assets/pastel.webp'),
  },
  {
    id: '4',
    nome: 'Kibe Frito',
    preco: 'R$ 4,00',
    descricao: 'Trigo temperado com recheio de carne moída.',
    imagem: require('../assets/kibe.jpg'),
  },
  {
    id: '5',
    nome: 'Enroladinho de Salsicha',
    preco: 'R$ 4,50',
    descricao: 'Massa assada com recheio de salsicha.',
    imagem: require('../assets/enroladinho1.webp'),
  },
];

export default function Salgados() {
  return (
    <View style={styles.container}>
      <FlatList
        data={salgados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            }
            <Image source={item.imagem} style={styles.imagem} />
            <View style={styles.info}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.descricao}>{item.descricao}</Text>
              <Text style={styles.preco}>{item.preco}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    padding: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  imagem: {
    width: 70,
    height: 70,
    borderRadius: 6,
  },
  info: {
    marginLeft: 12,
    flex: 1,
  },
  nome: {
    fontSize: 16, 
    fontWeight: 'bold',
    color: '#344D0E',
  },
  descricao: {
    fontSize: 12,
    color: 'ffffff',
    marginVertical: 2,
  },
  preco: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#d9534f',
  },
});