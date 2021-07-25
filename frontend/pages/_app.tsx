import React from 'react'
import Router from 'next/router'
import Page from '../components/Page'
import NProgress from 'nprogress';
import { ApolloProvider } from '@apollo/client';
import withApollo from '../lib/withData';
import { MyAppProps, PageProps } from '../Types/PageProps'

import '../components/styles/nprogress.css';
import { AppContext, AppProps } from 'next/app';

Router.events.on('routeChangeStart', () => {
	NProgress.start()
})

Router.events.on('routeChangeComplete', () => {
	NProgress.done()
})

Router.events.on('routeChangeError', () => {
	NProgress.done()
})

const MyApp = ({ Component, pageProps, apollo }: MyAppProps) => {
	return (
		<ApolloProvider client={apollo}>
			<Page>
				<Component {...pageProps} />
			</Page>
		</ApolloProvider>
	)
}


MyApp.getInitialProps = async ({ Component, ctx }: any): Promise<PageProps> => {
	let pageProps: PageProps = {};
	if (Component.getInitialProps) {
		pageProps = await Component.getInitialProps(ctx);
	}
	pageProps.query = ctx.query;
	return pageProps;
}

export default withApollo(MyApp)
