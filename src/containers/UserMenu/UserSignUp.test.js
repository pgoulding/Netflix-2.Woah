import {
  UserSignup,
  mapStateToProps
}
from './UserSignup';
import {
  shallow
} from 'enzyme';
import React from 'react';
import {mockUser} from '../../utils/mockData/mockData';
import {signIn} from '../../actions';


describe('UserSignup', () => {
      describe('component', () => {
        let wrapper, instance;

        beforeEach(() => {
          wrapper = shallow( < UserSignup /> );
          instance = wrapper.instance()
        });
        it('should match snapshot', () => {
          expect(wrapper).toMatchSnapshot();
        });
        it('should have a default state', () => {
          wrapper = shallow( <UserSignup/>, {
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
            expect(mappedProps).toEqual(mockState);
          });
        });
    });
  });
