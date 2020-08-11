import React from 'react';
import { render } from '@testing-library/react';
import AuthLinkButton from '../components/AuthLinkButton';

const defaultprops = {
	text: 'create employee',
	hrefLink: '#',
};

describe('The <employees /> component test', () => {
	it('Link button used should have text content and link', () => {
		render(<AuthLinkButton {...defaultprops} />);
	});
});
