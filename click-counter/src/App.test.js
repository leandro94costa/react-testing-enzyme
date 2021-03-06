import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

// set up enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

// Factory function to create a ShallowWrapper for the App component.
// @function setup
// @returns {ShallowWrapper}
const setup = () => shallow(<App />);

const findByTestAttr = (wrapper, value) => wrapper.find(`[data-test='${value}']`);

test('renders without error', () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, 'component-app');

    expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'increment-button');

    expect(button.length).toBe(1);
});

test('renders counter display', () => {
    const wrapper = setup();
    const counterDisplay = findByTestAttr(wrapper, 'counter-display');

    expect(counterDisplay.length).toBe(1);
});

test('counter display starts at 0', () => {
    const wrapper = setup();
    const count = findByTestAttr(wrapper, 'count').text();

    expect(count).toBe('0');
});

test('click button increments counter', () => {

});