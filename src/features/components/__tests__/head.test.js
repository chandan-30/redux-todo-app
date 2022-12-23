import { render, screen} from '@testing-library/react';
import Head from '../Head';

// test case for head component

test('should render Head component', () => {
 
    render(<Head/>)
    const typeElement = screen.getByTestId('Head-id')
    expect(typeElement).toBeInTheDocument();
})