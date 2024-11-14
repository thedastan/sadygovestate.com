import { Button, ChakraProps, Flex } from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { GoArrowUpRight } from 'react-icons/go'

interface DefButtonProps extends ChakraProps {
	children: string | JSX.Element
	type?: 'button' | 'submit'
	disabled?: boolean
	isLight?: boolean
}

const AnimateButton = ({
	children,
	type,
	disabled,
	isLight,
	...props
}: DefButtonProps) => {
	const [theme, setTheme] = useState(isLight)
	const ref = useRef<any>(null)
	const width = ref.current?.offsetWidth ? ref.current?.offsetWidth : 0
	return (
		<Button
			ref={ref}
			onFocus={() => setTheme(!theme)}
			className='animate-button'
			transition='.4s'
			w='100%'
			variant='none'
			bg={theme ? '#FFFFFF' : '#4A4A4A'}
			border='1px solid #4A4A4A'
			color={theme ? '#000000' : '#FFFFFF'}
			gap='10px'
			rounded='32px'
			alignItems='center'
			justifyContent='space-between'
			h='66px'
			fontWeight='400'
			fontSize='16px'
			lineHeight='16px'
			padding='10px 10px 10px 20px'
			type={type}
			isDisabled={disabled}
			_focus={{ boxShadow: 'none' }}
			sx={{
				'&:focus': {
					'.arrow': {
						transform: `translateX(-${width - 66}px)`
					}
				}
			}}
			{...props}
		>
			<p>{children}</p>

			<Flex
				className='arrow'
				alignItems='center'
				justifyContent='center'
				transition='.6s'
				w='46px'
				h='46px'
				rounded='50%'
				bg={theme ? '#4A4A4A' : '#FFFFFF'}
				color={theme ? '#FFFFFF' : '#4A4A4A'}
			>
				<GoArrowUpRight fontSize='22px' />
			</Flex>
		</Button>
	)
}

export default AnimateButton
