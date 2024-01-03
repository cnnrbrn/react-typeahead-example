import { useParams } from "react-router-dom";

function ProductPage() {
	const { id } = useParams();

	return <div>Product page id: {id}</div>;
}

export default ProductPage;
