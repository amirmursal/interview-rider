import { createPortal } from "react-dom";
import "./modalDialog.css";
import { useId, useRef } from "react";
import useEscapeKeyDown from "../hooks/useEscapeKeyPress";
import useClickOutside from "../hooks/useClickOutside";

const ModalDialog = ({
  children,
  title,
  handleCloseModal,
  open = false,
}: any) => {
  const contentId = useId();
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);

  useEscapeKeyDown("Escape", handleCloseModal);
  useClickOutside(dialogRef, handleCloseModal);

  if (!open) {
    return null;
  }
  return createPortal(
    <div className="modal-overlay">
      <div
        className="modal"
        role="dialog"
        aria-labelledby={titleId}
        aria-describedby={contentId}
        ref={dialogRef}
      >
        <h1 className="modal-title" id={titleId}>
          {title}
        </h1>
        <div id={contentId}>{children}</div>
        <button onClick={handleCloseModal}>Close</button>
      </div>
    </div>,
    document.body
  );
};

export default ModalDialog;
