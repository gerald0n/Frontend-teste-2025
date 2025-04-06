'use client'

import { styled } from 'styled-components'

import { useModal } from '@/hooks/useModal'

import { SvgIcon } from '../shared/SvgIcon'

type Props = {
  asIcon?: boolean
}

export function ModalClose({ asIcon = false }: Props) {
  const { close } = useModal()

  return asIcon ? (
    <HeaderButton type="button" onClick={close}>
      <SvgIcon.X width={16} height={16} />
    </HeaderButton>
  ) : (
    <FooterButton type="button" onClick={close}>
      Fechar
    </FooterButton>
  )
}

const HeaderButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
  font-size: 14px;
  display: flex;
  align-items: center;
`

const FooterButton = styled.button`
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.secundary.muted};
  padding: 0.8rem 1.6rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.black.main};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  font-size: ${({ theme }) => theme.font.sizes.medium};
  border-radius: ${({ theme }) => theme.border.radius.medium};
  font-family: ${({ theme }) => theme.font.family.inter};

  transition: background-color ${({ theme }) => theme.transition.default};

  &:hover {
    background-color: ${({ theme }) => theme.colors.zinc[100]};
  }
`
