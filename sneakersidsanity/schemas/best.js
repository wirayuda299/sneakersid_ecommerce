export default {
	name: 'best',
	title: 'Best',
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
			},
		},
		{
			name: 'price',
			title: 'Price',
			type: 'number',
		},
		{
			name: 'detail',
			title: 'Details',
			type: 'string',
		},
	],
};
