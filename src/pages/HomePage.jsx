import { Loading, Input } from "react-daisyui";
import ProductList from "../components/products/ProductList";
import { useFetch } from "../hooks/useFetch";
import ProductFilter from "../components/products/ProductFilter";
import { BASE_URL } from "../constants/api";

export default function HomePage() {
	const { data: products, isLoading, error } = useFetch(BASE_URL);

	if (isLoading) {
		return <Loading />;
	}

	if (error) {
		return (
			<Alert>
				<span>{error}</span>
			</Alert>
		);
	}

	return (
		<div className="container mx-auto">
			<ProductFilter products={products} />
			<ProductList products={products} />
		</div>
	);
}
