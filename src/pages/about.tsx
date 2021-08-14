import Head from 'next/head';
import React from 'react';

import { Navbar } from '@ui/Navbar';
import { Footer } from '@ui/Footer';

interface Props {}

const About: React.FC<Props> = () => {
  return (
    <div>
      <Head>
        <title>About | Carberra Tutorials</title>
        <meta name="description" content="Learn about Carberra Tutorials" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <h1 className="text-brand-gradient font-brand text-3xl text-center mt-10 mb-5 lowercase">
          About Me
        </h1>
        <div className="flex-grow">
          <p className="font-sans text-white text-md mt-4 mx-6 sm:mx-10 md:mx-20 lg:w-7/12 lg:mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. At erat
            pellentesque adipiscing commodo elit at imperdiet dui. Cras sed
            felis eget velit aliquet sagittis id. Mus mauris vitae ultricies leo
            integer malesuada. Amet consectetur adipiscing elit duis tristique
            sollicitudin nibh sit. Quis vel eros donec ac odio tempor orci
            dapibus. Morbi tincidunt augue interdum velit euismod in
            pellentesque massa. Elementum pulvinar etiam non quam. Id nibh
            tortor id aliquet lectus proin nibh nisl condimentum. Rutrum quisque
            non tellus orci ac auctor. Vitae tortor condimentum lacinia quis vel
            eros donec ac odio. Adipiscing elit pellentesque habitant morbi
            tristique senectus et netus. Condimentum vitae sapien pellentesque
            habitant morbi tristique senectus et. Risus feugiat in ante metus
            dictum at tempor commodo. Sit amet massa vitae tortor. A diam
            sollicitudin tempor id eu nisl. At elementum eu facilisis sed odio
            morbi. Phasellus faucibus scelerisque eleifend donec pretium
            vulputate. Et ligula ullamcorper malesuada proin libero nunc. Varius
            quam quisque id diam vel quam elementum pulvinar. Magna sit amet
            purus gravida quis blandit turpis. Nec dui nunc mattis enim ut
            tellus elementum sagittis. Mattis pellentesque id nibh tortor id
            aliquet lectus proin. Arcu ac tortor dignissim convallis aenean et
            tortor. Ut venenatis tellus in metus vulputate. Ante in nibh mauris
            cursus mattis molestie. Quam elementum pulvinar etiam non quam lacus
            suspendisse faucibus interdum. Eget nunc scelerisque viverra mauris
            in aliquam sem fringilla. Duis at consectetur lorem donec. Sed risus
            ultricies tristique nulla aliquet enim tortor at auctor. Scelerisque
            in dictum non consectetur a erat nam. Eu scelerisque felis imperdiet
            proin fermentum leo. Id volutpat lacus laoreet non. Varius quam
            quisque id diam vel quam elementum pulvinar. Est ullamcorper eget
            nulla facilisi etiam dignissim diam quis. Viverra tellus in hac
            habitasse platea dictumst vestibulum rhoncus. Eu facilisis sed odio
            morbi quis commodo. Porttitor eget dolor morbi non arcu. Sapien
            pellentesque habitant morbi tristique senectus et. Massa tincidunt
            nunc pulvinar sapien et. Lacus viverra vitae congue eu. Id diam
            maecenas ultricies mi. Varius quam quisque id diam vel quam
            elementum. Suscipit tellus mauris a diam maecenas sed enim. Nulla
            facilisi cras fermentum odio. Porttitor massa id neque aliquam
            vestibulum morbi. Ut pharetra sit amet aliquam id diam. Purus
            viverra accumsan in nisl nisi scelerisque. Malesuada proin libero
            nunc consequat. Laoreet sit amet cursus sit amet dictum sit. Non
            tellus orci ac auctor augue mauris augue neque gravida. Lorem ipsum
            dolor sit amet consectetur adipiscing elit ut aliquam. Massa enim
            nec dui nunc mattis enim ut tellus elementum. Pretium viverra
            suspendisse potenti nullam ac. Scelerisque in dictum non consectetur
            a erat nam. Vestibulum mattis ullamcorper velit sed. A erat nam at
            lectus urna duis. Pulvinar mattis nunc sed blandit libero volutpat
            sed. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae
            congue. Vitae tortor condimentum lacinia quis vel. Etiam dignissim
            diam quis enim. Netus et malesuada fames ac turpis egestas.
            Tincidunt id aliquet risus feugiat in ante metus. Turpis egestas
            maecenas pharetra convallis. Volutpat est velit egestas dui id
            ornare arcu. Nascetur ridiculus mus mauris vitae ultricies. Semper
            quis lectus nulla at volutpat. Purus sit amet luctus venenatis
            lectus. Aliquet porttitor lacus luctus accumsan. Neque vitae tempus
            quam pellentesque nec nam aliquam sem. Odio euismod lacinia at quis
            risus sed. Mauris pellentesque pulvinar pellentesque habitant morbi
            tristique. Mattis ullamcorper velit sed ullamcorper. Diam ut
            venenatis tellus in.
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
