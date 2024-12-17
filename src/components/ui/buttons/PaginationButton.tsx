import { Flex } from '@chakra-ui/react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

interface PaginationButton {
	isNext: boolean
	disabled: boolean
	onClick: () => void
}
const PaginationButton = ({ disabled, isNext, onClick }: PaginationButton) => {
	const handleClick = () => {
		if (!disabled) onClick()
	}
	return (
		<Flex
			onClick={handleClick}
			color={disabled ? '#757575' : '#1E1E1E'}
			alignItems='center'
			gap='2'
			fontSize='18px'
			flexDirection={isNext ? 'row' : 'row-reverse'}
			cursor='pointer'
		>
			{isNext ? 'Next' : 'Previous'}
			{isNext ? <FaArrowRight /> : <FaArrowLeft />}
		</Flex>
	)
}

export default PaginationButton
