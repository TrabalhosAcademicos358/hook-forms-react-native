import { StyleSheet, Text, View } from "react-native";
import { useForm, Controller } from "react-hook-form";

import Button from "./components/Button";
import Input from "./components/Input";

export default function App() {
  const { control, handleSubmit, formState: { errors }, getValues } = useForm();

  const onSubmit = (data) => console.log(data);

  const listController = [
    {
      nameId: "name",
      props: { placeholder: "Nome" },
      rule: { required: "É obrigatorio enviar o seu nome" },
    },
    {
      nameId: "email",
      props: { placeholder: "E-mail" },
      rule: { required: "O campo de Email é obrigatorio", pattern: {
        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
        message: "Email inválido"
      }},
    },
    {
      nameId: "password",
      props: { placeholder: "Senha", secureTextEntry: true },
      rule: { required: "É obrigatorio enviar uma senha", pattern: {
        value: /^.{7,}$/,
        message: "A senha deve conter mais de 7 caracteres"
      }}
    },
    {
      nameId: "password_confim",
      props: { placeholder: "Confirme a senha", secureTextEntry: true },
      rule: { required: "Confirme sua senha", validate: value => (
        value === getValues("password") || "As senhas devem ser iguais"
      )}
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crie sua conta</Text>

      <View style={styles.form}>
        {listController.map(({ nameId, props, rule }, index) => (
          <Controller
            rules={rule}
            key={index}
            control={control}
            name={nameId}
            render={({ field: { onChange } }) => (
              <>
                <Input {...props} onChangeText={onChange} errorMessage={errors[nameId]?.message} />
                {errors[nameId] && <Text>{ errors[nameId]?.message }</Text>}
              </>
            )}
          />
        ))}

        <Button onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 40,
    padding: 25,
  },
  title: {
    fontSize: 20,
  },
  form: {
    width: "100%",
    gap: 10,
  },
});
