// 1. Importação do Mongoose
// Traz a biblioteca responsável por conectar e gerenciar o banco de dados MongoDB.
import mongoose from 'mongoose';

// 2. Definição do Schema (Esquema)
// Define a estrutura dos dados do usuário. O banco só aceitará o que estiver definido aqui.
const UserSchema = new mongoose.Schema({
    // Campo para o nome do usuário
    name: {
        type: String,    // Define que o dado deve ser um texto
        required: true,  // Torna o preenchimento obrigatório
    },
    // Campo para o email
    email: {
        type: String,
        required: true,  // Obrigatório
        unique: true,    // Único: Impede que dois usuários cadastrem o mesmo email
    },
    // Campo para a senha
    password: {
        type: String,
        required: true,  // Obrigatório
    },
    // Campo de data de criação (Audit)
    // Útil para saber quando o usuário se cadastrou na plataforma
    createdAt: {
        type: Date,        // Tipo data
        default: Date.now, // Se não for enviado, pega a data/hora atual automaticamente
    }
});

// 3. Exportação do Modelo
// Exporta o modelo 'User' para ser utilizado pelos Controllers e Services.
// O 'export default' é usado aqui para seguir o padrão moderno (ES Modules) do projeto.
export default mongoose.model('User', UserSchema);