import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = sanityClient({
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    projectId: 'pu9j5w5t',
    token: 'skdjcrhr3TcFwBE69hNXtIViv4scrrcfQXRVwvgpr4oPWmcwvWsLmAjYr2N4KXJGh2HpqAwqwjW7y1Jyj2xVaNKgaZhdl2I87fp2H6kRWh5A5bMdrDaDqGM06fW0d2dS8bDcHaztJgLulnmqAkOmYEk9fTNobDPG4EnWUUgAg3qHdh4mNny8',
});

const builder = imageUrlBuilder(client); 
export const urlFor = (source) => builder.image(source);