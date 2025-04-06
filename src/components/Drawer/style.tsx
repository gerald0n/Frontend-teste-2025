'use client'

import { styled, keyframes } from 'styled-components'

const slideIn = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`

const slideOut = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
`

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 1000;
`

export const DrawerWrapper = styled.div<{ $isOpen: boolean }>`
  background: white;
  width: 360px;
  height: 100%;
  display: flex;
  flex-direction: column;
  animation: ${({ $isOpen }) => ($isOpen ? slideIn : slideOut)} 0.3s ease-out
    forwards;
  animation-fill-mode: forwards;
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.1);
`
