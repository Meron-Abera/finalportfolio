import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled, { keyframes } from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

// Matrix effect
const matrixFall = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(100vh);
    opacity: 0;
  }
`;

// Text fade-in
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const MatrixBackground = styled.div`
  position: fixed;
  z-index: 0;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  pointer-events: none;

  span {
    position: absolute;
    top: -100%;
    color: #00ff00;
    font-family: monospace;
    font-size: 14px;
    white-space: nowrap;
    user-select: none;
    animation: ${matrixFall} 3s linear infinite;
  }
`;

const StyledHeroSection = styled.section`
  position: relative;
  z-index: 1;
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding-top: var(--nav-height);

  h1 {
    margin: 0 0 30px 4px;
    color: rgb(202, 122, 241);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;
  }

  h2,
  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 1.1;
    font-weight: 600;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
    animation: ${fadeInUp} 1.2s ease-out;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }

  .cta-group {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }

  .scroll-down-button {
    background-color: transparent;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 60px;

    svg {
      width: 30px;
      height: 30px;
      animation: bounce 2s infinite;
      color: #e6c8f5;
    }
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;

const AnimatedHeading = styled.h3`
  animation: ${fadeInUp} 1.2s ease-out;
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(true);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setShowScrollButton(false);
    }
  };

  const one = <h1>Hello, this is</h1>;
  const two = <h2 className="big-heading">Meron Abera Shibiru.</h2>;
  const three = (
    <AnimatedHeading className="big-heading">
      I design and develop web and mobile applications.
    </AnimatedHeading>
  );
  const four = (
    <>
      <p>
         I’m a software engineer with experience in full-stack development and technical mentorship.
        I focus on building reliable, practical software that solves real problems. I am also
        co-founder of a rapidly growing software startup, I lead the engineering team and oversee
        client relationships. To date, we have secured multiple contracts and successfully completed
        and delivered four projects for international clients, with additional engagements currently
        in progress.
      </p>
      <div className="cta-group">
        <a
          className="email-link"
          href="mailto:meronabera2121@gmail.com"
          target="_blank"
          rel="noopener noreferrer">
          Say Hi
        </a>
      </div>
    </>
  );

  const items = [one, two, three, four];

  const matrixChars = Array.from({ length: 40 }).map((_, i) => (
    <span
      key={i}
      style={{
        left: `${Math.random() * 100}vw`,
        animationDuration: `${2 + Math.random() * 2}s`,
        animationDelay: `${Math.random() * 2}s`,
      }}>
      {Array.from({ length: 20 })
        .map(() => String.fromCharCode(0x30a0 + Math.random() * 96))
        .join('')}
    </span>
  ));

  return (
    <>
      <MatrixBackground>{matrixChars}</MatrixBackground>
      <StyledHeroSection>
        {prefersReducedMotion ? (
          <>
            {items.map((item, i) => (
              <div key={i}>{item}</div>
            ))}
            {showScrollButton && (
              <button className="scroll-down-button" onClick={handleScrollDown}>
                <FontAwesomeIcon icon={faChevronDown} />
              </button>
            )}
          </>
        ) : (
          <TransitionGroup component={null}>
            {isMounted &&
              items.map((item, i) => (
                <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                  <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
                </CSSTransition>
              ))}
            {showScrollButton && (
              <CSSTransition key="scroll-button" classNames="fadeup" timeout={loaderDelay}>
                <button
                  className="scroll-down-button"
                  onClick={handleScrollDown}
                  style={{ transitionDelay: '600ms' }}>
                  <FontAwesomeIcon icon={faChevronDown} />
                </button>
              </CSSTransition>
            )}
          </TransitionGroup>
        )}
      </StyledHeroSection>
    </>
  );
};

export default Hero;
