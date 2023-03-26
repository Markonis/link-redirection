export interface LinkDefinition {
	slug: string;
	tags: string[];
	links: {
		[country: string]: string;
	};
}

export const linkDefinitions: LinkDefinition[] = [
	{
		slug: 'sample-slug',
		tags: ['tag1', 'tag2'],
		links: {
			US: 'https://www.amazon.com/sample-product',
			CA: 'https://www.amazon.ca/sample-product',
		},
	},
];

export const fallbackDefinition: LinkDefinition = {
	slug: 'fallback',
	tags: ['fallback'],
	links: {
		US: 'https://www.amazon.com/fallback-product',
	},
};
