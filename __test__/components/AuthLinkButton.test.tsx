import React from 'react';
import { render } from '@testing-library/react';
import AuthLinkButton from '../../components/AuthLinkButton';
import { debug } from 'console';

const defaultProps = {
	text: 'create',
	hrefLink: '#',
};

const setUpLiinkButton = () => render(<AuthLinkButton {...defaultProps} />);

describe('The <AuthLinkButton /> component test', () => {
	it('Link button should be defined', () => {
		expect(AuthLinkButton).toBeDefined();
	});

	it('Link button text and hrefLink should be in the document', () => {
		
	});
});
