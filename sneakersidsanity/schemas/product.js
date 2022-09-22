export default {
	name: 'product',
	title: 'Product',
	type: 'document',
	fields: [
		{
			name: 'image',
			title: 'Image',
			type: 'array',
			of: [{ type: 'image' }],
			options: {
				hotshot: true,
			},
		},
		{
			name: 'name',
			title: 'name',
			type: 'string',
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'name',
				maxLength: 90,
			},
		},
		{
			name: 'price',
			title: 'Price',
			type: 'number',
		},
		{
			name: 'categories',
			title: 'Categories',
			type: 'string',
			
		},
		{
			name: 'description',
			title: 'Description',
			type: 'string',
		},
		{
			name: 'colors',
			title: 'Colors',
			type: 'string',
		}, 
		{
			name: 'country', 
			title: 'Country',
			type: 'string',
		},
		{
			name: 'style', 
			title: 'Style',
			type: 'string',
		}, 
	],
};
