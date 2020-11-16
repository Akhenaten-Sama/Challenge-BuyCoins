import { ApolloClient, gql } from 'apollo-boost';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

const mylink = new HttpLink({
	uri: 'https://api.github.com/graphql'
});

const authLink = setContext((_, { headers }) => {
	return {
		headers: {
			...headers,
			authorization: `BEARER ${process.env.GITHUB_AUTHORIZATION}`
		}
	};
});
const cache = new InMemoryCache();

const Link = authLink.concat(mylink);
const client = new ApolloClient({
	link: Link,
	cache
});


 export const Github = async () => {


	try {
		
	
	const Data = await client.query({
		query: gql`
			{
				viewer {
					login
					avatarUrl
					bio
					repositories(first: 20, isLocked: false) {
						edges {
							node {
								forkCount
								updatedAt
								url
								stargazerCount
								languages(first: 1, orderBy: { direction: DESC, field: SIZE }) {
									edges {
										node {
											name
											color
										}
									}
								}
								description
								name
							}
						}
					}
					name
				}
			}
		`
	}).then(data=> data.data.viewer);


   return Data

} catch (error) {
	console.log(error)	
}
   
};

