import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>SHEN Yue</GradientText> 👋
        </>
      }
      description={
        <>
          I worked as a manager at {' '}
          <a className="text-cyan-400 hover:underline" href="https://www2.deloitte.com/sg/en.html">
            Deloitte
          </a>{' '}
          Before that, I worked at valuation senior associate at {' '}
          <a className="text-cyan-400 hover:underline" href="https://kpmg.com/sg/en/home.html">
            KPMG
          </a>{' '}
          I obtained Master of Science in Financial Engineering at National University of Singapore.
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/yue-shen-403666157/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
