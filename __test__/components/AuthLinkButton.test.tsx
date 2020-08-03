import React from 'react';
import { render } from '@testing-library/react';
import AuthLinkButton from '../../components/AuthLinkButton';

const defaultProps = {
	text: 'create',
	hrefLink: '#',
};

const { getByTestId } = render(<AuthLinkButton {...defaultProps} />);

describe('The <AuthLinkButton /> component test', () => {
	it('Link button should be defined', () => {
		expect(AuthLinkButton).toBeInTheDocument();
	});

	it('Link button text and hrefLink should be in the document', () => {
		// expect(getByText(defaultProps.hrefLink)).toHaveTextContent(/''/i);
		// expect(getByText(defaultProps.text)).toBe('create');
	});
});
