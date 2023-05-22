export interface LinkDefinition {
	slug: string;
	tags: string[];
	links: {
		DEFAULT: string;
		[country: string]: string;
	};
}

export const linkDefinitions: LinkDefinition[] = [
	{
		slug: 'backpack',
		tags: ['backpack'],
		links: {
			DEFAULT: 'https://amzn.to/3BDjjqG'
		},
	},
	{
		slug: 'vissles-keyboard',
		tags: ['keyboard'],
		links: {
			DEFAULT: 'https://amzn.to/3cNiYJB'
		}
	},
	{
		slug: 'michals-keyboard',
		tags: ['keyboard'],
		links: {
			DEFAULT: 'https://amzn.to/3xGschW',
			DE: 'https://amzn.to/432Z0PN'
		}
	},
	{
		slug: 'mx-master-3s',
		tags: ['mouse'],
		links: {
			DEFAULT: 'https://amzn.to/3zZZBF9',
			DE: 'https://amzn.to/3NW0vuH'
		}
	},
	{
		slug: 'michals-mouse',
		tags: ['mouse'],
		links: {
			DEFAULT: 'https://amzn.to/3BXGHAI',
			DE: 'https://amzn.to/42nnlQ8'

		}
	},
	{
		slug: 'cleaning-tool',
		tags: ['cleaning'],
		links: {
			DEFAULT: 'https://amzn.to/3CZZVpV',
			DE: 'https://amzn.to/3HWvdjq'
		}
	},
	{
		slug: 'earbuds',
		tags: ['earbuds'],
		links: {
			DEFAULT: 'https://amzn.to/3RYEVUx',
			DE: 'https://amzn.to/44SR59s'
		}
	},
	{
		slug: 'lofree',
		tags: ['keyboard'],
		links: {
			DEFAULT: 'https://amzn.to/3W0OBkI',

		}
	},
	{
		slug: 'floating-plant',
		tags: ['plant', 'desk-accessory'],
		links: {
			DEFAULT: 'https://amzn.to/3gXzU1S',
			DE: 'https://amzn.to/3LM1wTm'
		}
	},
	{
		slug: 'productivity-mouse',
		tags: ['mouse'],
		links: {
			DEFAULT: 'https://amzn.to/3OJEEoD',
			DE: 'https://amzn.to/3LTRmAf'
		}
	},
	{
		slug: 'headphones',
		tags: ['headphones'],
		links: {
			DEFAULT: 'https://amzn.to/3IGTP0X',
			DE: 'https://amzn.to/42qHTam'
		}
	},
	{
		slug: 'productivity-keyboard',
		tags: ['keyboard'],
		links: {
			DEFAULT: 'https://amzn.to/3Hw7k2B',
			DE: 'https://amzn.to/42F1ByQ'
		}
	},
	{
		slug: 'led-matrix-clock',
		tags: ['clock', 'bluetooth-speaker', 'desk-accessory'],
		links: {
			DEFAULT: 'https://amzn.to/3zIKwHO',
			DE: 'https://amzn.to/3W0xqAb'
		}
	},
	{
		slug: 'github',
		tags: ['github'],
		links: {
			DEFAULT: 'https://github.com/Markonis'
		}
	},
	{
		slug: 'one-menu',
		tags: ['one-menu'],
		links: {
			DEFAULT: 'https://withmarko.com/one-menu'
		}
	},
	{
		slug: 'typing-game',
		tags: ['game', 'project'],
		links: {
			DEFAULT: 'https://type.withmarko.com'
		}
	},
	{
		slug: 'boox',
		tags: ['tablet'],
		links: {
			DEFAULT: 'https://shop.boox.com/?ref=gisG1RQxpV9suI'
		}
	},
	{
		slug: 'pdf-element',
		tags: ['sponsored', 'software'],
		links: {
			DEFAULT: 'https://bit.ly/3KO53zQ'
		}
	},
	{
		slug: 'pdf-element-mobile',
		tags: ['sponsored', 'software'],
		links: {
			DEFAULT: 'https://bit.ly/40hrnrp'
		}
	}
];

export const fallbackDefinition: LinkDefinition = {
	slug: 'fallback',
	tags: ['fallback'],
	links: {
		DEFAULT: 'https://www.amazon.com',
	},
};
