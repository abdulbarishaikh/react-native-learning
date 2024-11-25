import React, {PropsWithChildren} from 'react';

import FirstComponent from './Components/FirstComponent';
import {ScrollView, Text, View} from 'react-native';
import StateComponent from './Components/StateComponent';
import InlineStyleComponent from './Components/InlineStyleComponent';
import InternalStyleComponent from './Components/InternalStyleComponent';
import ExternalStyleComponent from './Components/ExternalStyleComponent';
import FlatListComponent from './Components/FlatListComponent';
import MapComponent from './Components/MapComponent';
import GridComponent from './Components/GridComponent';
import DynamicGridComponent from './Components/DynamicGridComponent';
import FlatListWithCustomComponent from './Components/FlatListWithCustomComponent';
import SectionListComponent from './Components/SectionLinkComponent';
import ClassComponent from './Components/Classes/ClassComponent';
import ClassWithPropStateComponent from './Components/Classes/ClassWithPropStateComponent';
import UseEffectComponent from './Components/UseEffectComponent';
import ShowHideComponent from './Components/ShowHideComponent';
import ResponsiveDesignComponent from './Components/ResponsiveDesignComponent';
import ButtonsComponent from './Components/ButtonsComponent';
import RadioButtonComponent from './Components/RadioButtonComponent';

type SectionProps = PropsWithChildren<{
  title: string;
}>;
function Section({children, title}: SectionProps): React.JSX.Element {
  return (
    <View style={{marginBottom: 10}}>
      <Text
        style={{fontSize: 30, marginTop: 20, marginLeft: 20, color: '#17a2b8'}}>
        {title}
      </Text>
      {children}
    </View>
  );
}

function App(): React.JSX.Element {
  return (
    <>
      {/* <ScrollView contentInsetAdjustmentBehavior="automatic">
        <FirstComponent />
        <Section title="State Component Started">
          <StateComponent />
        </Section>
        <Section title="Inline Style">
          <InlineStyleComponent />
        </Section>
        <Section title="Internal Style">
          <InternalStyleComponent />
        </Section>
        <Section title="External Style">
          <ExternalStyleComponent />
        </Section>
        <Section title="FlatList">
          <FlatListComponent />
        </Section>
        <Section title="Map Component by custom list">
          <MapComponent />
        </Section>
        <Section title="Grid Component">
          <GridComponent />
        </Section>
        <Section title="Dynamic Grid Component">
          <DynamicGridComponent />
        </Section>
        </ScrollView> */}
      {/* <Section title="Flat List With Custom Component">
          <FlatListWithCustomComponent />
        </Section> */}
      {/* <Section title="Section Link Component">
          <SectionListComponent />
        </Section> */}
      {/* <Section title="First Class Component">
          <ClassComponent />
        </Section> */}
      {/* <Section title="Class With Prop State Component">
        <ClassWithPropStateComponent />
      </Section> */}
      {/* <Section title="Use Effect Hook">
        <UseEffectComponent />
      </Section> */}
      {/* <Section title="Show Hide Component">
        <ShowHideComponent />
      </Section> */}
      {/* <ResponsiveDesignComponent /> */}
      {/* <Section title="Buttons Component">
        <ButtonsComponent />
      </Section> */}
      <Section title="Radio Button Component"></Section>
      <RadioButtonComponent />
    </>
  );
}

export default App;
