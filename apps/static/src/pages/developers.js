import {Card, CardLarge} from '@components/experiments';
/* --- Component --- */
const Page = props => {
  return (
    <Atom.Flex column>
      <Showcase />
      <Featured />
    </Atom.Flex>
  );
};
export default Page;

const styles = {
  // Section 1
  showcase: {
    container: {
      bg: 'blue',
      color: 'white',
      minHeight: '80vh',
    },
    left: {
      flex: 5,
      p: 4,
      py: 6,
    },
    right: {
      boxShadow: 'insetLeftHeavy',
      gradient: 'blue',
      borderRadius: '0 0 0 40px',
      py: 50,
      flex: 3,
      p: 4,
      zIndex: 1000,
    },
  },

  // Components
  featureCard: {
    container: {
      p: 3,
    },
  },
  featuredAdventure: {
    container: {
      p: 3,
    },
  },
  featured: {
    container: {
      py: 4,
      px: [2, 2, 4],
    },
    left: {
      flex: 1,
      order: 1,
    },
    right: {
      flex: 1,
      order: 2,
    },
  },
};

const Showcase = props => {
  return (
    <Atom.Flex flex={1} sx={styles.showcase.container}>
      <Atom.BackgroundImage
        opacity={0.86}
        ratio={0.35}
        sx={{
          zIndex: 0,
          opacity: 0.4,
          overflow: 'hidden',
        }}
        src="https://images.squarespace-cdn.com/content/v1/5ce6c5ea16bcf700010cf4eb/1569085618224-15UT48EN1VTSFWXOHFA0/ke17ZwdGBToddI8pDm48kKAwwdAfKsTlKsCcElEApLR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UegTYNQkRo-Jk4EWsyBNhwKrKLo5CceA1-Tdpfgyxoog5ck0MD3_q0rY3jFJjjoLbQ/ethereal-ny-home-kevin-owocki.jpg?format=2500w"
      />
      <Atom.Flex center column sx={styles.showcase.left}>
        <Atom.Box sx={{textAlign: 'center'}}>
          <Atom.Heading giga heavy sx={{mt: 0}}>
            <Atom.Span heavy>Ethereum Developers</Atom.Span>{' '}
          </Atom.Heading>
        </Atom.Box>
      </Atom.Flex>
    </Atom.Flex>
  );
};

const Featured = props => {
  return (
    <Atom.Box sx={{my: 5}}>
      <Atom.Container>
        <Atom.Box sx={{textAlign: 'center'}}>
          <Atom.Heading giga heavy>
            Find Your Perfect Niche
          </Atom.Heading>
          <Atom.Paragraph lg>
            Explore the many opportunities for contribution to the Ethereum
            ecosystem.
          </Atom.Paragraph>
        </Atom.Box>
        <EthereumFeatures />
      </Atom.Container>
    </Atom.Box>
  );
};

const EthereumFeatures = props => {
  return (
    <Atom.Flex column sx={{flexWrap: 'wrap'}}>
      <CardLarge
        sx={styles.featureCard.container}
        title="Developer Resources"
        subtitle="Get Guidance and Education"
        summary="Quisque sollicitudin id turpis sed elementum. Integer congue nunc id diam finibus, vel imperdiet augue blandit. Suspendisse sit amet tempus lacus."
        label="Learn"
        to="decentralized/finance"
      />
      <CardLarge
        sx={styles.featureCard.container}
        title="Community Growth"
        subtitle="Plan Outreach and Coordination (Grants Available)"
        summary="Quisque sollicitudin id turpis sed elementum. Integer congue nunc id diam finibus, vel imperdiet augue blandit. Suspendisse sit amet tempus lacus."
        label="Learn"
      />
      <CardLarge
        sx={styles.featureCard.container}
        title="Partnership Alliance"
        subtitle="Blockchain Growth for Everyone"
        summary="Quisque sollicitudin id turpis sed elementum. Integer congue nunc id diam finibus, vel imperdiet augue blandit. Suspendisse sit amet tempus lacus."
        label="Learn"
      />
    </Atom.Flex>
  );
};

const DeveloperPitch = props => {
  return (
    <Atom.Container>
      <Atom.Flex column sx={{flex: 1, py: 4}}>
        <CardLarge
          sx={styles.featuredAdventure.container}
          title="Qitcoin Quests"
          image="https://everipedia-storage.s3.amazonaws.com/ProfilePics/gitcoin__26162.jpeg"
          subtitle="Learn about the Blockchain"
          summary="Quisque sollicitudin id turpis sed elementum. Integer congue nunc id diam finibus, vel imperdiet augue blandit. Suspendisse sit amet tempus lacus."
          label="Learn"
        />
        <CardLarge
          sx={styles.featuredAdventure.container}
          title="Rapid Adventure"
          image="https://pbs.twimg.com/profile_images/1195184664190709761/XOy6nDiE_400x400.jpg"
          subtitle="Experience the Blockchain"
          summary="Quisque sollicitudin id turpis sed elementum. Integer congue nunc id diam finibus, vel imperdiet augue blandit. Suspendisse sit amet tempus lacus."
          label="Learn"
        />
        <CardLarge
          sx={styles.featuredAdventure.container}
          title="Ethereum Studio"
          image="https://pbs.twimg.com/profile_images/1141255736984555520/ugyT8HP-.png"
          subtitle="Build with the Blockchain"
          summary="Quisque sollicitudin id turpis sed elementum. Integer congue nunc id diam finibus, vel imperdiet augue blandit. Suspendisse sit amet tempus lacus."
          label="Learn"
        />
      </Atom.Flex>
    </Atom.Container>
  );
};

const Web2Developers = props => {
  return (
    <Atom.Flex alignCenter sx={styles.featured.container}>
      <Atom.Flex sx={styles.featured.left}>
        <Atom.Image src="https://imgur.com/2p26zqU.png" />
      </Atom.Flex>
      <Atom.Flex column sx={styles.featured.right}>
        <Atom.Heading xxl>What Is a Web 2 Developer?</Atom.Heading>
        <Atom.Paragraph>
          If you're visiting this site, you may be a Web 2.0 Developer! Prior to
          the advent of Web 2.0, the internet was comprised of static landing
          pages, basic tools, and protocols with limited functionality.
        </Atom.Paragraph>
        <Atom.Paragraph>
          Web 2.0 saw the addition of more interactive content, such as web
          apps, user-generated content, social media networking, and cloud
          storage. Under this domain, people are the product and data is the
          price. Most developers today are fluent in the language of Web 2.0.
        </Atom.Paragraph>
      </Atom.Flex>
    </Atom.Flex>
  );
};

const Web3Developers = props => {
  return (
    <Atom.Flex alignCenter sx={styles.featured.container}>
      <Atom.Flex sx={styles.featured.right}>
        <Atom.Image src="https://imgur.com/2p26zqU.png" />
      </Atom.Flex>
      <Atom.Flex column sx={styles.featured.left}>
        <Atom.Heading xxl>What Is a Web 3 Developer?</Atom.Heading>
        <Atom.Paragraph>
          A Web 3.0 developer is a Web 2.0 developer with an arsenal of
          additional tools at his/her disposal. Web 3.0 is an internet where
          devices are connected in decentralized networks rather than depending
          on server-based data. In Web 3.0, you own your own data, your own
          digital identity, and your own digital assets.
        </Atom.Paragraph>
        <Atom.Paragraph>
          You are not reliant on single servers or institutions to tell you
          about the truth of the world or the current state of the system. In
          Web 3.0, Digital assets can be scarce, have value, and be transferred
          as easily as data.
        </Atom.Paragraph>
      </Atom.Flex>
    </Atom.Flex>
  );
};
