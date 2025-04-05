'use client'

import {  Textarea } from '@chakra-ui/react'

export interface IInputComponentProps {
  name?: string
  placeholder?: string
  value?: string
  handleChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  required?: boolean
  as?: 'textArea'
}

const InputTextArea = ({
  name,
  placeholder,
  value,
  handleChange,
  required = true
}: IInputComponentProps) => {
  return (
    <Textarea
    onChange={handleChange}
    variant='none'
    value={value}
    name={name}
    rounded='20px'
    placeholder={placeholder}
    pt='4'
    h='120px'
    maxH='150px'
    w='100%'
    border='1px solid #3331394D'
    bg='#FFFFFF'
    fontSize='16px'
    px='5'
    fontWeight='400'
    lineHeight='16.94px'
    color='#333139'
    _placeholder={{
      opacity: '.7',
      fontSize: '14px'
    }}
    isRequired={required}
  />
    
  )
}

export default InputTextArea
