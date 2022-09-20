import { Heading, Header, Button } from './components';
import { AppWrapper, Text } from './styledComponents';

function App() {
  return (
    <AppWrapper>
      <Header />
      <Heading h1>111</Heading>
      <Heading>222</Heading>
      <Text>Text</Text>
      <Button>Text</Button>
    </AppWrapper>
  );
}

export default App;
