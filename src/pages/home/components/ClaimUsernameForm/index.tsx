import { Button, Text, TextInput } from '@ignite-ui/react'
import { Form, FormAnnotation } from './styles'
import { ArrowUpRight } from 'phosphor-react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const claimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'O usuário precisa ter pelo menos 3 letras' })
    .regex(/^([a-z\\\\-]+)$/i, {
      message: 'O usuário pode ter apenas letras e hifens',
    })
    .transform((username) => username.toLocaleLowerCase()),
})

type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export function ClaimUsernameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(claimUsernameFormSchema),
  })

  async function handleClaimUsername(data: ClaimUsernameFormData) {
    console.log(data)
  }

  return (
    <>
      <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
        <TextInput
          crossOrigin="anonymous"
          size="sm"
          prefix="ignite.com/"
          placeholder="Seu usuário"
          {...register('username')}
        />
        <Button size="sm" type="submit">
          Reservar
          <ArrowUpRight />
        </Button>
      </Form>

      <FormAnnotation>
        <Text size="sm">
          {errors.username
            ? errors.username.message
            : 'Digite o nome do usuário'}
        </Text>
      </FormAnnotation>
    </>
  )
}