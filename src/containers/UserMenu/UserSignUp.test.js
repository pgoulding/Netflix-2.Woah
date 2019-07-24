import {
  UserSignUp,
  mapStateToProps,
  mapDispatchToProps
}
from './UserSignup';
import {
  shallow
} from 'enzyme';
import React from 'react';
import {mockUser} from '../../utils/mockData/mockData';
import {signIn} from '../../actions';


describe('UserSignUp', () => {
      describe('component', () => {
        let wrapper, instance;

        beforeEach(() => {
          wrapper = shallow( < UserSignUp /> );
          instance = wrapper.instance()
        });
        it('should match snapshot', () => {
          expect(wrapper).toMatchSnapshot();
        });
        it('should have a default state', () => {
          wrapper = shallow( <UserSignUp/>, {
              disableLifecycleMethods: true
            }
          );
          expect(wrapper.state()).toEqual({
            name: '',
            password: '',
            email: '',
            error: '',
            toSignIn: false
          });
      });
        describe('mapStateToProps', () => {
          it('should return an object with the user and specificMovie', () => {
            const mockState = {
              user: mockUser
            }
            const mappedProps = mapStateToProps(mockState);
            expect(mappedProps).toEqual(mockUser);
          });
        });
        describe('mapDispatchToProps', () => {
          it('should call dispatch with a signIn action when signIn is called', () => {
            const mockDispatch = jest.fn();
            const actionToDispatch = signIn(mockResults);
            const mappedProps = mapDispatchToProps(mockDispatch);
            mappedProps.signIn(mockResults);
            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
          });
        });
      });
