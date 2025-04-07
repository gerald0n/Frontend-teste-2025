'use client'

import { styled } from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;

  ${({ theme }) => theme.media.lg} {
    justify-content: end;
  }
`

const PageList = styled.div`
  display: flex;
  gap: 8px;
`

const PageButton = styled.button<{ $isActive?: boolean }>`
  width: 36px;
  height: 36px;
  border-radius: 6px;
  border: 1px solid ${({ $isActive }) => ($isActive ? '#000' : '#ccc')};
  background-color: ${({ $isActive }) => ($isActive ? '#000' : '#fff')};
  color: ${({ $isActive }) => ($isActive ? '#fff' : '#333')};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: ${({ $isActive }) => ($isActive ? '#000' : '#f3f3f3')};
  }
`

const NavButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  background: transparent;
  border: none;
  color: #333;
  cursor: pointer;

  &:hover {
    color: #000;
  }

  &:disabled {
    color: #aaa;
    cursor: not-allowed;
  }
`

const SkeletonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;

  ${({ theme }) => theme.media.lg} {
    justify-content: end;
  }
`

const SkeletonPageButton = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 6px;
  background-color: #e0e0e0;
`

const SkeletonNavButton = styled.div`
  width: 80px;
  height: 36px;
  border-radius: 6px;
  background-color: #e0e0e0;
`

export {
  Wrapper,
  PageList,
  PageButton,
  NavButton,
  SkeletonWrapper,
  SkeletonPageButton,
  SkeletonNavButton,
}
