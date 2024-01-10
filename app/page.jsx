'use client';
import Card from '@components/card/Card';
import { Section } from './home.styles';
import { Footer } from '@components/footer/Footer';
import { Container } from '@components/common/container/Container.styles';
export default function Page() {
  return (
    <>
      <Section>
        <Card></Card>
      </Section>
      <Footer> </Footer>
    </>
  );
}
