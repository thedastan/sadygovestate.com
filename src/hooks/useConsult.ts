import { useMutation } from '@tanstack/react-query'
import { countryService } from '@/service/country.service'
import { IFormState } from '@/models/other.model'

export function useConsult() {
  const { mutate,  isSuccess, isError, error } = useMutation({
    mutationKey: ['consult-submit'],
    mutationFn: (data: IFormState) => countryService.postFeedback(),
    onSuccess: () => {
      alert('данные успешно отправлены')
    },
    onError: (error) => {
      console.error('Ошибка при отправке консультации:', error)
    }
  })

  return { mutate,isSuccess, isError, error }
}
