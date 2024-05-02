import React from "$veda-ui/react";
import styled, { useTheme } from "$veda-ui/styled-components";
import { Modal, ModalBody, ModalHeader } from '$veda-ui/@devseed-ui/modal';
import { Button } from '$veda-ui/@devseed-ui/button';
import { CollecticonXmarkSmall } from '$veda-ui/@devseed-ui/collecticons';

const ModalContainer = styled(Modal)<{ width?: string; height?: string }>`
  div {
    background: none;
  }

  ${ModalHeader} {
    display: flex;
    justify-content: flex-end;
    width: ${props => props.width ?? '100%'};
    background: none;
    padding: 0.5rem 0;
  }

  ${ModalBody} {
    padding: 0;
    margin: 0;
    width: ${props => props.width ?? '100%'};
    height: ${props => props.height ?? '100%'};
    iframe {
      position: absolute;
      width: ${props => props.width ?? '100%'};
      height: ${props => props.height ?? '100%'};
    }
  }
`;

interface VideoModalProps {
  iframe: JSX.Element;
  display: boolean;
  onClose: () => void;
  width?: string;
  height?: string;
}

export default function VideoModal(props: VideoModalProps) {
  const {iframe, display, onClose, height, width} = props;
  const theme = useTheme();

  return (
    <ModalContainer
      width={width}
      height={height}
      id='modal'
      revealed={display}
      closeButton={false}
      renderHeadline={() => (
        <Button variation='base-text' onClick={onClose}>
          <CollecticonXmarkSmall size='large' color={theme.color!['surface']}/>
        </Button>
      )}
      content={
        <>
          {iframe}
        </>
      }
    />

  );
}