import { input } from 'console-input'
import axios from 'axios'
import saveToJSON from './writeFile'

export const inputCep = () => input('Digite seu cep: ')

export const searchFromCep = async (cep) => {
  try {
    const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    return data
  } catch (error) {
    console.log('Ocorreu um erro')
  }
}

// Falta testar tudo, codando na cara e na coragem apenas kkkkkkkkkk

const randomInt = (min, max) => Math.floor(Math.random() * (max - min) ) + min;

export const randomCep = (amount) => {
  let cepList = []
  for (let i = 0; i < amount; i++){
    cepList.push(randomInt(29000000000, 30000000000));
  }
  return cepList;
}


// Falta try/catch
export const generateCepListJSON = async (cepList) => {
  cepList.forEach(element => {
    cep = element;
    const {logradouro, bairro, localidade, uf} = await searchFromCep(element);
    const cepData = {
      logradouro,
      bairro,
      localidade,
      uf,
    }
    saveToJSON(data, 'arquivo.json')
  });
}

