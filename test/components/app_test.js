import {renderComponent, expect} from '../test_helper';
import App from "../../src/components/app";

//Use 'describe' to group together similar tests
describe('App', () => {
  //create an instance of App
  let component = renderComponent(App);
  beforeEach(() => {
    component = renderComponent(App);
  });
  // Use 'it' to test a single attribute of single
  it('shows a  comment box', () => {
    //Use 'expect' to make an 'assertion' about a target
    expect(component.find('.comment-box')).to.exist;
  });
  it('shows a comment list', () => {
    expect(component.find('.comment-list')).to.exist;
  });
});



