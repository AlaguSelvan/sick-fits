import { NextPageContext } from 'next/dist/next-server/lib/utils';
import { AppContext, AppProps } from 'next/app';


export type PageProps = {
	// TODO: Refactor any
	query?: any;
	pathname?: string;
	req?: NextPageContext['req'];
};

interface MyAppProps extends AppProps {
	apollo?: ApolloClient<NormalizedCacheObject> | null = null;

}
