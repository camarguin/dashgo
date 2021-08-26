import { Flex, Button, Stack } from "@chakra-ui/react"
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import Input from "../components/Form/Input"

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('Email is a required field').email('Email is invalid'),
  password: yup.string().required('Password is a required field')
})

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  // console.log(formState.errors)

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(values)

  }

  return (
    <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <Flex as="form" w="100%" maxW={360} bg="gray.800" p="8" borderRadius={8} flexDir="column" onSubmit={handleSubmit(handleSignIn)}>
        <Stack spacing="4">
          <Input name="email" label="Email" type="email" {...register('email')} error={formState.errors.email} />
          <Input name="password" label="Password" type="password" {...register('password')} error={formState.errors.password} />
        </Stack>
        <Button type="submit" mt="6" colorScheme="pink" size="lg" isLoading={formState.isSubmitting}>Login</Button>
      </Flex>
    </Flex>
  )
}
