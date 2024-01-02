import { Card } from "react-daisyui";
import PropTypes from "prop-types";

function ProductItem({ title, image, description }) {
	return (
		<Card imageFull className="flex-auto">
			<Card.Image src={image} alt={title} />
			<Card.Body>
				<Card.Title tag="h2" className="text-white">
					{title}
				</Card.Title>
				<p className="text-white">{description}</p>
			</Card.Body>
		</Card>
	);
}

export default ProductItem;

ProductItem.propTypes = {
	title: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};
