import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.sampleapis.com/avatar/characters/'
});


export async function getCharacters() {
    try {
        const response = await api.get();
        return response.data.map(character => {
            if (character.name === "蘇科 [3]") {
                return { ...character, name: "Zuko" };
            }
            return character;
        });

    } catch (error) {
        console.error('Erro ao buscar iten:', error);
        throw error;
    }
}


export async function getCharacter(id) {
    try {
        const response = await api.get(`/${id}`);
        let character = response.data;

        // Corrigindo o nome apenas para o Zuko
        if (character.name === "蘇科 [3]") {
            character.name = "Zuko";
        }

        return character;
    } catch (error) {
        console.error('Erro ao buscar itens:', error);
        throw error;
    }
}

