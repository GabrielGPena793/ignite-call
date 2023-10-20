import { Button, TextInput } from '@ignite-ui/react'
import { Form } from './styles'
import { ArrowUpRight } from 'phosphor-react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'

const claimUsernameFormSchema = z.object({
  username: z.string(),
})

type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export function ClaimUsernameForm() {
  const { register, handleSubmit } = useForm<ClaimUsernameFormData>()

  async function handleClaimUsername(data: ClaimUsernameFormData) {
    console.log(data)
  }

  return (
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
  )
}
