import React from 'react'
import Router from 'next/router'
import Page from '../components/Page'
import NProgress from 'nprogress';
import { ApolloProvider } from '@apollo/client';
import withData from '../lib/withData';

import '../components/styles/nprogress.css';
import { DocumentContext } from 'next/dist/next-server/lib/utils';

Router.events.on('routeChangeStart', () => {
	NProgress.start()
})

Router.events.on('routeChangeComplete', () => {
	NProgress.done()
})

Router.events.on('routeChangeError', () => {
	NProgress.done()
})

interface IComponent {
	Component: React.ComponentType<any>;
	pageProps: any;
	apollo: any;
}

const MyApp = ({ Component, pageProps, apollo }: IComponent) => {
	return (
		<ApolloProvider client={apollo}>
			<Page>
				<Component {...pageProps} />
			</Page>
		</ApolloProvider>
	)
}

interface IProps {
	Component: any;
	ctx: DocumentContext;
}

// Todo: Refactor Types
MyApp.getInitialProps = async ({ Component, ctx }: IProps) => {
	let pageProps: any = {};
	if (Component.getInitialProps) {
		pageProps = await Component.getInitialProps(ctx);
	}
	pageProps.query = ctx.query;
}

export default withData(MyApp)
