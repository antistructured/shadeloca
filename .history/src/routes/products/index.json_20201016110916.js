import products from './_products';

const contents = JSON.stringify(products => products.then(res => res.text()));

// const contents = JSON.stringify(products.map(product => {
// 	return {
// 		name: product.name,
// 		description: product.description
// 	};
// }));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}