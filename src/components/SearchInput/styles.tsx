'use client'

import { styled } from 'styled-components'

const SearchContainer = styled.div`
  padding: 16px;
`
const SearchField = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  &:focus {
    outline: none;
    border-color: #0070f3;
    box-shadow: 0 0 0 2px rgba(0, 112, 243, 0.2);
  }
`
const ResultsContainer = styled.div`
  min-height: 100px;
  max-height: 300px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-bottom: 26px;
  position: relative;
`
const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
`
const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border-left-color: #0070f3;
  animation: spin 1s linear infinite;
  margin-bottom: 12px;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
const LoadingText = styled.p`
  font-size: 14px;
  color: #333;
  margin: 0;
`
export {
  SearchContainer,
  SearchField,
  ResultsContainer,
  LoadingOverlay,
  Spinner,
  LoadingText,
}
