interface PageInterface {
	children: React.ReactNode;
}

const Page = ({ children }: PageInterface) => (
	<div>
		<h2>I am the page component</h2>
		{children}
	</div>
);

export default Page;
