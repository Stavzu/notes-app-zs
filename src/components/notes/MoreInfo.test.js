import React from "react";
import { mount, shallow } from "enzyme";
import MoreInfo from "./MoreInfo";

describe("MoreInfo", () => {
    let note = {description: 'hej', note: 'nou', createAt: '11'}
    let props = note
    let mountedScreen;

  const lockScreen = () => {
    if (!mountedScreen) {
      mountedScreen = mount(
        <MoreInfo {...props} />
      );
    }
    return mountedScreen;
  }

  beforeEach(() => {
    props =  {
        note: { 
            description: undefined,
            note: undefined,
            createAt: undefined
        }
    };
    mountedScreen = undefined;
  });
  
  it("always renders a div", () => {
    const divs = lockScreen().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  it('create at', () => {
        const comp = shallow(<MoreInfo createAt={11} />);
        expect(comp.children().length).toBe(0);
    });


    it('check props object', () => {  
        const props = {
                note: {
                    description: 'hej', note: 'nou', createAt: '11'
                }
            },
            DateInputComponent = mount(<MoreInfo {...props} />);
        expect(DateInputComponent.prop('note')).toMatchObject(note);
    });
})