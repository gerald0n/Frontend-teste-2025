'use client'

import { styled } from 'styled-components'

const Section = styled.section`
  color: #252525;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: space-between;
`

const SectionTitle = styled.h2`
  font-family: var(--font-inter);
  font-weight: 400;
  font-size: 24px;
  text-align: left;
  width: 100%;
`

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media (min-width: 480px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    width: 100%;
  }

  @media (min-width: 768px) and (max-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    width: 100%;
  }

  @media (min-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: baseline;
  }

  &.empty-state {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export { Section, SectionTitle, SectionContent }
