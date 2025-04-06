'use client'

import { styled, keyframes } from 'styled-components'

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.97); }
  to { opacity: 1; transform: scale(1); }
`

const fadeOut = keyframes`
  from { opacity: 1; transform: scale(1); }
  to { opacity: 0; transform: scale(0.97); }
`

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const FadeWrapper = styled.div<{ $isOpen: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${({ $isOpen }) => ($isOpen ? fadeIn : fadeOut)} 0.2s ease-out;
  width: 100%;
`

export const Content = styled.div<{ $size: 'sm' | 'md' | 'lg' }>`
  background: white;
  border-radius: 8px;
  width: 100%;
  max-width: ${({ $size }) =>
    $size === 'sm' ? '360px' : $size === 'lg' ? '720px' : '500px'};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 300;
  font-size: 16px;
  padding: 16px;
  border-bottom: 1px solid #eaeaea;
`

export const Footer = styled.div`
  padding: 16px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: flex-end;
`

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`
