export interface LinkDefinition {
    slug: string;
    tags: string[];
    links: {
        US: string;
        [country: string]: string;
    };
}

export const linkDefinitions: LinkDefinition[] = [
    {
        slug: 'backpack',
        tags: ['backpack'],
        links: {
            US: 'https://amzn.to/3BDjjqG'
        },
    },
    {
        slug: 'vissles-keyboard',
        tags: ['keyboard'],
        links: {
            US: 'https://amzn.to/3cNiYJB'
        }
    },
    {
        slug: 'michals-keyboard',
        tags: ['keyboard'],
        links: {
            US: 'https://amzn.to/3xGschW'
        }
    },
    {
        slug: 'mx-master-3s',
        tags: ['mouse'],
        links: {
            US: 'https://amzn.to/3zZZBF9'
        }
    },
    {
        slug: 'michals-mouse',
        tags: ['mouse'],
        links: {
            US: 'https://amzn.to/3BXGHAI'
        }
    },
    {
        slug: 'cleaning-tool',
        tags: ['cleaning'],
        links: {
            US: 'https://amzn.to/3CZZVpV'
        }
    },
    {
        slug: 'earbuds',
        tags: ['earbuds'],
        links: {
            US: 'https://amzn.to/3RYEVUx'
        }
    },
    {
        slug: 'lofree',
        tags: ['keyboard'],
        links: {
            US: 'https://amzn.to/3W0OBkI'
        }
    },
    {
        slug: 'floating-plant',
        tags: ['plant', 'desk-accessory'],
        links: {
            US: 'https://amzn.to/3gXzU1S'
        }
    },
    {
        slug: 'productivity-mouse',
        tags: ['mouse'],
        links: {
            US: 'https://amzn.to/3OJEEoD'
        }
    },
    {
        slug: 'headphones',
        tags: ['headphones'],
        links: {
            US: 'https://amzn.to/3IGTP0X'
        }
    },
    {
        slug: 'productivity-keyboard',
        tags: ['keyboard'],
        links: {
            US: 'https://amzn.to/3Hw7k2B'
        }
    },
    {
        slug: 'led-matrix-clock',
        tags: ['clock', 'bluetooth-speaker', 'desk-accessory'],
        links: {
            US: 'https://amzn.to/3zIKwHO'
        }
    },
    {
        slug: 'github',
        tags: ['github'],
        links: {
            US: 'https://github.com/Markonis'
        }
    },
    {
        slug: 'one-menu',
        tags: ['one-menu'],
        links: {
            US: 'https://withmarko.com/one-menu'
        }
    },
    {
        slug: 'typing-game',
        tags: ['game', 'project'],
        links: {
            US: 'https://type.withmarko.com'
        }
    }
];

export const fallbackDefinition: LinkDefinition = {
    slug: 'fallback',
    tags: ['fallback'],
    links: {
        US: 'https://www.amazon.com/fallback-product',
    },
};
