import {renderComponent, expect} from '../test_helper';
import CommentBox from "../../src/components/comment_box";

//first arg - what we will test? in this case it will be CommentBox component
describe('CommentBox', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(CommentBox);//return simple jQuery object that contains a react component
  });

  it('has a correct class', () => {
    expect(component).to.have.class('comment-box');
  });
  it('has a text area', () => {
    expect(component.find('textarea')).to.exist;
  });
  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });

  describe('Entering some text', () => {
    beforeEach(() => {
      component.find('textarea').simulate('change', 'a new comment');
    });

    it('shows text that is entered in textarea', () => {
      expect(component.find('textarea')).to.have.value('a new comment');
    });

    it('clears textarea after submit', () => {
      component.simulate('submit');
      expect(component.find('textarea')).to.have.value('');
    });
  });

});