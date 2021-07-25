import { ChangeEvent, useState } from 'react'

const useForm = <T>(initial: T) => {

	const [inputs, setInputs] = useState(initial);

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setInputs({
			...inputs,
			[e.target.name]: e.target.value
		})
	}
	return {
		inputs,
		handleChange
	}
}

export default useForm
