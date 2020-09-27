import yup from 'yup';

const schema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required('Por favor, nós precisamos do seu email para fazer login'),
  password: yup
    .string()
    .required('Sem senha nós não sabemos se é realmente você')
    .min(6, 'Olha a senha deve conter pelo menos 8 caracteres'),
});

export default schema;
