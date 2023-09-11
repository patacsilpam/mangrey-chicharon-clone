import { Analytics } from '@vercel/analytics/react';

import Feature from "../components/Feature";
import Flavors from "../components/Flavors";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function Home() {
  return (
    <>
      <Analytics />
      <SeoHead title="Mang Rey's Mushroom Chicharon" />
      <Layout>
        <Hero />
        <Feature />
        <Flavors />
      </Layout>
    </>
  );
}
