import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Col } from 'react-bootstrap';
import { Button } from './Button';
import Title from './Title';
import { ExclamationTriangle } from './Icons';

const ConfirmationModal = ({
  visible,
  title,
  body,
  onConfirm,
  onCancel,
}) => {
  const [show, setShow] = useState(visible);

  const handleCancel = () => {
    if (onCancel) onCancel();
    setShow(false);
  };
  const handleConfirm = () => {
    if (onConfirm) onConfirm();
    setShow(false);
  };

  return (
    <Modal size="lg" show={visible || show} centered onHide={handleCancel}>
      <Modal.Header closeButton>
        <Modal.Title className="text-center container px-4 pt-4 pb-0">
          <div className="m-auto round-icon bg-danger text-white mb-4">
            <ExclamationTriangle width="2em" height="2em" />
          </div>
          <Title color="blue" type="caption" textCenter className="mt-4 mb-4">
            {title}
          </Title>
        </Modal.Title>
      </Modal.Header>
      {body && (<Modal.Body>{body}</Modal.Body>)}
      <Modal.Footer className="container  px-4 pb-4">
        <Col
          sm={12}
          md={8}
          className="text-center m-auto  p-4"
        >
          {onConfirm && (
          <Button color="blue" variant="primary" onClick={handleConfirm}>
            Confirmar
          </Button>
          )}
          {onCancel && (
          <Button outline type="button" color="blue" className="btn btn-outline-primary mt-2 mt-lg-4" onClick={handleCancel}>
            Cancelar
          </Button>
          )}
        </Col>
      </Modal.Footer>
      <style jsx>
        {`
            .round-icon{
                padding: 1em;
                border-radius: 4em;
                width: 4em;
                height: 4em;
                vertical-align: center;
                text-align: center;
            }
            `}
      </style>
    </Modal>
  );
};


export default ConfirmationModal;
