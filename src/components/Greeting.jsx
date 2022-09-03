export default function Greeting(props) {
  const { nume, varsta } = props;
  return `Greetings, ${nume}, ${varsta} years old!`;
}
