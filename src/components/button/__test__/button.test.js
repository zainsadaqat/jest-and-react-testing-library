import React from 'react';
import ReactDOM from 'react-dom';
import Button from './../button';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import renderer from 'react-test-renderer';

afterEach(cleanup);

it('Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button></Button>, div);
});

// Testing Props
it('Renders button correctly', () => {
  const { getByTestId } = render(
    <Button label="Zain Sadaqat's Button"></Button>
  );
  expect(getByTestId('button')).toHaveTextContent("Zain Sadaqat's Button");
});

it('Renders button correctly second time', () => {
  const { getByTestId } = render(<Button label="My Button"></Button>);
  expect(getByTestId('button')).toHaveTextContent('My Button');
});

// Snapshot Testing
it('Matches Snapshot 1 ', () => {
  const tree = renderer.create(<Button label="click me"></Button>).toJSON();
  expect(tree).toMatchSnapshot();
  // Press u to update the snapshot
});

it('Matches Snapshot 2 ', () => {
  const tree = renderer.create(<Button label="save me"></Button>).toJSON();
  expect(tree).toMatchSnapshot();
  // Press u to update the snapshot
});
