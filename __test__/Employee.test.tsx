import React from 'react';
import { render, getByText } from '@testing-library/react';
import Employees from '../pages/auth/employees';
// import AuthLinkButton from '../components/AuthLinkButton';

const defaultprops ={
    text: 'create employee',
    hrefLink: '#'
}

const { getByTitle, getByTestId, debug } = render(<Employees />);


describe('The <employees /> component test', () => {
    it('Link button used should have text content', () => {
        // render(<AuthLinkButton {...defaultprops}/>)
    });
});