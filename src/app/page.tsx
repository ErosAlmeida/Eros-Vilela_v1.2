import { Container } from "../components/Container";
import { Header } from "../components/Header";
import { LogoName } from "../components/LogoName";

export default async function HomePage() {
  return (
    <>
      <Header />
      <Container>
        <LogoName />
      </Container>
    </>
  );
}
