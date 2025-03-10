import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.sampleapis.com/avatar/characters/'
});


export async function getCharacters() {
    try {
        const response = await api.get();
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar iten:', error);
        throw error;
    }
}


export async function getCharacter(id) {
    try {
        const response = await api.get(`/${id}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar itens:', error);
        throw error;
    }
}

