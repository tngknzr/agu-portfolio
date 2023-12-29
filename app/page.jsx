'use client';
import Card from '@components/card/Card';
import { Section } from './home.styles';
import Myprojects from '@components/myProjects/Myprojects.jsx';
import Footer from '@components/footer/Footer';
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
