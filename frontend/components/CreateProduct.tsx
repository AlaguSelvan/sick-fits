import useForm from '../lib/useForm'
import { ProductForm } from '../Types/Product'

const CreateProduct = () => {
	const { inputs, handleChange } = useForm<ProductForm>({
		name: '',
		price: ''
	});
	return (
		<form>
			<label htmlFor="name">
				Name
				<input
					type="text"
					id="name"
					name="name"
					placeholder="name"
					value={inputs.name}
					onChange={handleChange}
				/>
			</label>
			<label htmlFor="price">
				Name
				<input
					type="text"
					id="price"
					name="price"
					placeholder="price"
					value={inputs.price}
					onChange={handleChange}
				/>
			</label>
		</form>
	)
}

export default CreateProduct
