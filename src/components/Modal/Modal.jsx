import React, { useState, useEffect } from 'react';
import './Modal.css';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

export default function Answer ({ setShow, show, correct }) {
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Body className="answer-modal">{correct}</Modal.Body>
        <Modal.Footer>
          <Button className="answer-modal" variant="warning" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}